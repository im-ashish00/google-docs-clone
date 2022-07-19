import React, { useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function TextEditor() {
  const containerRef = useCallback((containerElement) => {
    if (containerElement == null) return;
    containerElement.innerHTML = '';
    const editor = document.createElement('div');
    containerElement.append(editor);
    new Quill(editor, { theme: 'snow' });
  }, []);
  return <div ref={containerRef}></div>;
}
