import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// npm install react-filepond filepond --save
// https://github.com/pqina/react-filepond
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function App() {
  const [files, setFiles] = useState([])
  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        server="/fileupload"
        name="files" 
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <button onClick={()=>console.log(files[0])}>click</button>
    </div>
  )
}

export default App