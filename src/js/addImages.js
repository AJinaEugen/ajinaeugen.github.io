import image1 from "../assets/imagesForCakes/1.jpeg";
import image2 from "../assets/imagesForCakes/2.jpeg";
import image3 from "../assets/imagesForCakes/3.jpeg";
import image4 from "../assets/imagesForCakes/4.jpeg";
import image5 from "../assets/imagesForCakes/5.jpeg";
import image6 from "../assets/imagesForCakes/6.jpeg";
import image7 from "../assets/imagesForCakes/7.jpeg";
import image8 from "../assets/imagesForCakes/8.jpeg";
import image9 from "../assets/imagesForCakes/9.jpeg";

function loadImages() {
  let formatHtml = "";

  let arrayulMeu = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  console.log("loading images from addImage.js", image1);
  console.log("loading images from addImage.js", image2);
  console.log("loading images from addImage.js", image3);

  formatHtml = arrayulMeu.map((picture, index) => {
    if (index == 0) {
      return `<div class="imageView">
    <div class="topOpacity"></div>
      <img class="controlImages " src="${picture}" alt="">
     <div class="bottomOpacity"></div>
     </div>`;
    }
    return `<div class="imageView noShow">
    <div class="topOpacity "></div>
    <img class="controlImages "   src="${picture}" alt="">
     <div class="bottomOpacity "></div>
     </div>`;
  });

  return formatHtml.join("");
}

export { loadImages };

// import exp from "../experience.json";

// function loadExperience() {
//   let formatHtml = "";

//   formatHtml = exp.map(
//     (entry) =>
//       `<li class="bunch">

//       <div class ="container_journey">
//       <div class="circle"></div>
//       <div class="line"></div>
//       </div>
//       <div class="place_business">
//     <div class="position"> <p>${entry.Position}</p></div>
//      <div class="Employer"><p>${entry.Employer}</p></div>
//     <div class="Desciption"><p class="desc">${entry.Description}</p></div>
//     <div class="date"><p>${entry.date}</p></div>
//     </div>
//     </li>
//     `
//   );

//   return formatHtml.join("");
// }

// export { loadExperience };
