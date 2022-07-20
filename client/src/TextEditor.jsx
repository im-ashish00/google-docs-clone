import React, { useCallback, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import io from 'socket.io-client';

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
];

export default function TextEditor() {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  // Connecting to the server
  useEffect(() => {
    const s = io('http://localhost:3001');
    setSocket(s);
    return () => s.disconnect();
  }, []);

  const containerRef = useCallback((containerElement) => {
    if (containerElement == null) return;
    containerElement.innerHTML = '';
    const editor = document.createElement('div');
    containerElement.append(editor);
    const q = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    setQuill(q);
  }, []);

  // Sending changes
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== 'user') return;
      socket.emit('send-changes', delta);
    };
    quill.on('text-change', handler);
    return () => {
      quill.off('text-change', handler);
    };
  }, [socket, quill]);

  // Recieving changes and updating
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on('receive-changes', handler);
    return () => {
      socket.off('receive-changes', handler);
    };
  }, [socket, quill]);
  return <div ref={containerRef}></div>;
}
