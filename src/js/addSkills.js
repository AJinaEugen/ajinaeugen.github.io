import exp from "../experience.json";

function loadContactInfo() {
  let formatHtml = "";

  formatHtml = ` <div class="contactModal">
       <div class="close">X</div>
       <div class="contactInfoModal">
       <div class="numar-de-telefon">
       <h2>WhatsApp: 0770376762</h2>

       </div>
          <div class="frame" id="Contact">
      <iframe
        src="https://us21.list-manage.com/contact-form?u=c9ce8229995c3bf412e731ca3&form_id=2146978df46b416a35b57478eeea6b5b"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
       </div>
      </div>
    `;

  return formatHtml;
}

export { loadContactInfo };

// import skills from "../skills.json";

// function loadRating(x) {
//   let formatHtml = [];

//   for (let i = 0; i < x; i++) {
//     formatHtml += `<div class="bar"></div>`;
//   }

//   return formatHtml;
// }

// function loadSkills() {
//   let formatHtml = "";

//   formatHtml = skills.map(
//     (entry) => `<li>
//             <h3>${entry.Skill}</h3>
//             <br />
//             <p>${entry.Description}</p>
//             <div class="row" id="bars">
//               ${loadRating(entry.Rating)}

//             </div>
//           </li>`
//   );

//   return formatHtml.join("");
// }

// function lod() {
//   return new Promise((resolve, reject) => {
//     resolve(loadSkills());
//   });
// }

export { loadSkills, loadRating, lod };
