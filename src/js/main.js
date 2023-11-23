function downloadCV() {
  var githubUrl = "";

  var a = document.createElement("a");
  a.href = githubUrl;
  a.download = "Alex_Jina.pdf"; // You can set the desired filename here

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
}

document.getElementById("download").addEventListener("click", downloadCV);
