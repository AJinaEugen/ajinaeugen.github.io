import { loadImages } from "./addImages";
import { loadContactInfo, loadRating, loadSkills, lod } from "./addSkills";

function $(element) {
  return document.querySelectorAll(element);
}

$(".main-menu-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerText);

    if (e.target.innerText === "Galeria cu bunătăți") {
      console.log("Clicked galerie");
      showModal();
    } else {
      console.log("Clicked contact");
      showContactModal();
    }
  });
});

//Show/CLose Modal section

function showModal() {
  //Below 2 lines add the modal
  // document.querySelector(".showModal").innerHTML = loadImageModal();
  console.log("Display Show modal");
  document.querySelector(".imagesModal").style.display = "block";

  //this line adds an event listener for the modal-> the event listener uses the
  //function below
}

document.querySelector(".imageshow").innerHTML = loadImages();

function showContactModal() {
  //Below 2 lines add the modal
  document.querySelector(".contactModal").style.display = "block";
  console.log("Show contact modal");

  //this line adds an event listener for the modal-> the event listener uses the
  //function below
}

document.querySelector(".close").addEventListener("click", (e) => {
  console.log("closed modal for images");
  closeShowModal();
});

document.querySelector(".closeContact").addEventListener("click", (e) => {
  console.log("closed modal for Contact");
  closeContactModal();
});

function closeShowModal() {
  document.querySelector(".imagesModal").style.display = "none";
  v = 0;
}

function closeContactModal() {
  document.querySelector(".contactModal").style.display = "none";
}

//Control images

// v = visual index
let v = 0;

document.querySelector(".nextButton").addEventListener("click", (e) => {
  let images = $(".controlImages");

  nextPicture(images);
  console.log("clicked next img  ", v);
});

document.querySelector(".backButton").addEventListener("click", (e) => {
  let images = $(".controlImages");

  previousPicture(images);
  console.log("clicked back img  ", v);
});

function nextPicture(images) {
  images[v].style.display = "none";

  if (v < images.length - 1) {
    v++;
    images[v].style.display = "block";
  } else {
    images[v].style.display = "none";
    v = 0;
    images[v].style.display = "block";
  }
}

function previousPicture(images) {
  images[v].style.display = "none";

  if (v == 0) {
    v = images.length - 1;
    images[v].style.display = "block";
  } else {
    v--;
    images[v].style.display = "block";
  }
}

// function downloadCV() {
//   var githubUrl =
//     "https://github.com/AJinaEugen/newCV/releases/download/draft/QAJInaAlexandru.pdf";

//   var a = document.createElement("a");
//   a.href = githubUrl;
//   a.download = "Alex_Jina.pdf"; // You can set the desired filename here

//   document.body.appendChild(a);
//   a.click();

//   document.body.removeChild(a);
// }

// document.getElementById("download").addEventListener("click", downloadCV);

// $("#grid").addEventListener("click", (e) => {
//   console.log(e.target.innerText);
//   $(`#${e.target.innerText}`).scrollIntoView({
//     block: "start",
//     behavior: "smooth",
//     inline: "center",
//   });
// });

// $("#redirect").addEventListener("click", (e) => {
//   $("#Contact").scrollIntoView();
// });

// $("#redirectContact").addEventListener("click", (e) => {
//   $("#Contact").scrollIntoView();
// });

// function addExperience() {
//   $("#list_jobs").innerHTML = loadExperience();
// }

// function addRating() {
//   $("#bars").innerHTML = loadRating();
// }

// function addSkills() {
//   lod().then((loaded) => {
//     $("#list_skills").innerHTML = loaded;
//   });
// }

// addExperience();
// addSkills();

//Run npm run bundle and run live server on the dist indexHtmlDirectory -> opens up a browser where you can see ongoing changes
// On release :npm run start and push to github. Local server will show a wrong page but, the correct data is pushed to GithubPages for view
//
