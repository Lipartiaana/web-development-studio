const fileInput = document.getElementById("fileInput");
const downloadLink = document.getElementById("downloadLink");
const uploadedFileImg = `<i class="fa-solid fa-file-lines"></i>`;
let chosen = false;
let selectedFile = null;

window.addEventListener("load", () => {
  const savedFile = sessionStorage.getItem("uploadedFile");
  const savedFileName = sessionStorage.getItem("uploadedFileName");

  if (savedFile && savedFileName) {
    recreateDownloadLink(savedFile, savedFileName);
  }
});

fileInput.addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
  if (selectedFile) {
    enableDownloadLink(selectedFile);
  }
});

function createDownloadLink(fileName) {
  downloadLink.style.display = "block";
  downloadLink.style.color = "#d482ed";
  downloadLink.style.padding = "3px";
  downloadLink.setAttribute("download", fileName);
  chosen = true;
}

function enableDownloadLink(file) {
  if (file) {
    downloadLink.href = URL.createObjectURL(file);
    createDownloadLink(file.name);
  }
}

function recreateDownloadLink(base64File, fileName) {
  downloadLink.href = base64File;
  createDownloadLink(fileName);
  const uploadedFile = document.querySelector(".uploaded-file");
  uploadedFile.innerHTML = uploadedFileImg;
}

function uploadFile() {
  const savedFileName = sessionStorage.getItem("uploadedFileName");

  if (selectedFile) {
    const currentFileName = selectedFile.name;
    if (currentFileName === savedFileName) {
      alert("This file is already uploaded!");
      return;
    }
  }

  if (!selectedFile && savedFileName) {
    alert("This file is already uploaded!");
    return;
  }

  if (chosen && selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const fileContent = e.target.result;
      sessionStorage.setItem("uploadedFile", fileContent);
      sessionStorage.setItem("uploadedFileName", selectedFile.name);
      alert("File uploaded successfully!");
      const uploadedFile = document.querySelector(".uploaded-file");
      uploadedFile.innerHTML = uploadedFileImg;
    };
    reader.readAsDataURL(selectedFile);
  } else {
    alert("No file chosen");
  }
}
