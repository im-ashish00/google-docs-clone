const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/google-docs-clone');
const Document = require('./documentSchema');
const io = require('socket.io')(3001, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const defaultValue = '';

io.on('connection', (socket) => {
  socket.on('get-document', async (documentID) => {
    const document = await findOrCreateById(documentID);
    socket.join(documentID);
    socket.emit('load-document', document.data);
    // listening to custom send-changes from the client
    socket.on('send-changes', (delta) => {
      socket.broadcast.to(documentID).emit('receive-changes', delta);
    });

    // Saving data
    socket.on('save-document', async (data) => {
      await Document.findByIdAndUpdate(documentID, { data });
    });
  });
});

async function findOrCreateById(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}
