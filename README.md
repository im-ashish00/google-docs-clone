# Google docs clone

It's an awesome document editor 🚀.<br>
![Output Image](https://raw.githubusercontent.com/im-ashish00/google-docs-clone/main/output.gif)

### How to use:-

- You should have mongoDB, start mongod service in the background.
- cd to client and run "npm run start", do the same for server directory.
- It will start working on localhost port 3000.

#### Things Learned:-

- [useEffect rendered before useRef was loaded , to fix it used callback hook instead. It'll only render when the element will render.](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L32)
- [print media query.](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/App.css#L39)
- [How to connect server with client using socket.io.](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/server/server.js#L13)
- [quill.on](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L63), [quill.off](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L65), [quile.updateContents()](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L73), [quill.setText()](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L42), [quill.setContents()](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L51), [quill.getContents()](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L85), [quill.enable()](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L52), [quill.disable()](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L41) from the [documentation](https://quilljs.com/docs/quickstart/).
- [socket.emit (sending data to on)](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/server/server.js#L17), [socket.on (getting data from emit)](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L75), [socket.off() (to disconnect the custom socket)](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/TextEditor.jsx#L77), [socket.join() (for joining in the room)](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/server/server.js#L16), [socket.broadcast (to share it to everyone)](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/server/server.js#L20) from the [documentation](https://socket.io/docs/v4/).
- [react-router-dom - BrowserRouter, Routes, Route, Navigate.](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/App.jsx#L4)
- [uuid for generating different id's.](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/client/src/App.jsx#L11)
- [mongoose for persisting data.](https://github.com/im-ashish00/google-docs-clone/blob/dafeb7a45e48143a470425856b815f530bf5821d/server/server.js#L1)
