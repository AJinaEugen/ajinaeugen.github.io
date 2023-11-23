function downloadCV() {
  var githubUrl =
    "https://github.com/AJinaEugen/newCV/blob/master/src/assets/Alexandru%20Jina%20CV%202023.pdf";

  var a = document.createElement("a");
  a.href = githubUrl;
  a.download = "Alex_Jina.pdf"; // You can set the desired filename here

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
}

document.getElementById("download").addEventListener("click", downloadCV);
