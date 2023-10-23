 function handleDragOver(e) {
    e.preventDefault();
  }

  //   ---Function to convert into base64---//
  function processFiles(uploadedFiles) {
    Promise.all(
      uploadedFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target === null || event.target.result === null) return;
            resolve({ file, base64: event.target.result });
          };
          reader.readAsDataURL(file);
        });
      })
    ).then((filesData) => {
      console.log(filesData, "filesData");
      //   setFiles((prevFiles) => [...prevFiles, ...filesData]);
      setFiles(filesData);
    });
  }

  //   ---Drag and drop function--- //
  function handleDrop(e) {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }

  function handleChange(e) {
    const selectedFiles = Array.from(e.target.files);
   
