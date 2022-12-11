document
  .querySelector("#card > form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const [photo, title, description, date, location] = [
      e.target.elements.photo.value,
      e.target.elements.title.value,
      e.target.elements.description.value,
      e.target.elements.date.value,
      e.target.elements.location.value
    ];

    const [landscapeChecked, theme1Checked, theme2Checked] = [
      e.target.elements.landscape.checked,
      e.target.elements.theme1.checked,
      e.target.elements.theme2.checked
    ];

    const [landscapeClass, theme1Class, theme2Class] = [
      landscapeChecked ? "card_horizontal" : "",
      theme1Checked ? "theme1" : "",
      theme2Checked ? "theme2" : ""
    ];

    document.querySelector("#generatedCards").innerHTML += `
    <div class="card_generated ${landscapeClass} ${theme1Class} ${theme2Class}">
      <figure><img src="${photo}" alt="User image." width="400" height="auto"></figure>
      <div class="card_text">
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="other_info">
          ${date && `<p>${date}</p>`}
          ${location && `<p>${location}</p>`}
        </div>
      </div>
    </div>
    `;
  });

