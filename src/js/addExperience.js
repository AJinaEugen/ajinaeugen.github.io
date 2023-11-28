import exp from "../experience.json";

function loadExperience() {
  let formatHtml = "";

  formatHtml = exp.map(
    (entry) =>
      `<li class="bunch"> 

      <div class ="container_journey">
      <div class="circle"></div>
      <div class="line"></div>
      </div>
      <div class="place_business">
    <div class="position"> <p>${entry.Position}</p></div>
     <div class="Employer"><p>${entry.Employer}</p></div>
    <div class="Desciption"><p class="desc">${entry.Description}</p></div>
    <div class="date"><p>${entry.date}</p></div>
    </li>
    </div>`
  );

  return formatHtml.join("");
}

export { loadExperience };
