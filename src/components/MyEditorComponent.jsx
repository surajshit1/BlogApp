// MyEditorComponent.js
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function MyEditorComponent() {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <Editor
      apiKey="js81r3wtamcmgbzjp75wyfdicf4seavbh9ivvxyccm76gm3c"  // Add your TinyMCE API key here
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }}
      onEditorChange={handleEditorChange}
    />
  );
}

export default MyEditorComponent;
