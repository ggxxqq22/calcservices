import axios from "axios";
function uploadDataSet(form) {
  const formData = new FormData()
  const dataFile = form.fileList
  dataFile.forEach((item) => {
    formData.append("file", item.raw);
  });
  delete form.fileList
  if(form.imgList.length) {
    //转换base64格式
  } else {
    delete form.imgList
  }
  formData.append('info', JSON.stringify({
    form
  }))
  axios.post('http://120.27.210.217:8025/uploadData', formData).then(res => {
  })
}

export {
  uploadDataSet
}