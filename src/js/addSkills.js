import skills from "../skills.json";

function loadRating(x) {
  let formatHtml = [];

  for (let i = 0; i < x; i++) {
    formatHtml += `<div class="bar"></div>`;
  }

  return formatHtml;
}

function loadSkills() {
  let formatHtml = "";

  formatHtml = skills.map(
    (entry) => `<li>
            <h3>${entry.Skill}</h3>
            <br />
            <p>${entry.Description}</p>
            <div class="row" id="bars">
              ${loadRating(entry.Rating)}
                
            </div>
          </li>`
  );

  return formatHtml.join("");
}

function lod() {
  return new Promise((resolve, reject) => {
    resolve(loadSkills());
  });
}

export { loadSkills, loadRating, lod };
