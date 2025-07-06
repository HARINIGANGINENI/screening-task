const dropdownTemplate = `
        <div class="grid-selects">
        <div class="dropdown-headings">
      <span class="heading-label">Size</span>
      <span class="heading-label">Color</span>
    </div>
          <div class="select-row">
            <span>#1</span>
            <select><option>S</option></select>
            <select><option>Black</option></select>
          </div>
          <div class="select-row">
            <span>#2</span>
            <select><option>S</option></select>
            <select><option>Colour</option></select>
          </div>
        </div>
      `;
// Get all offer cards
const offerCards = document.querySelectorAll(".offer-card");
offerCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Prevent event bubbling from select elements
    if (e.target.tagName === "SELECT") return;
    // Deactivate all cards
    offerCards.forEach((c) => {
      c.classList.remove("active");
      c.querySelector("input").checked = false;
      const existingDropdown = c.querySelector(".grid-selects");
      if (existingDropdown) existingDropdown.remove();
    });
    // Activate the clicked card
    card.classList.add("active");
    card.querySelector("input").checked = true;
    // Add dropdown to the clicked card
    card.insertAdjacentHTML("beforeend", dropdownTemplate);
  });
});
