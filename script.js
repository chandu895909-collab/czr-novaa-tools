
function toggleMenu() {

  document.getElementById("menu")
    .classList.toggle("active");

}


// Search Tools

function searchTools() {

  let input = document
    .getElementById("search")
    .value.toLowerCase();

  let cards = document
    .querySelectorAll(".tool-card");

  cards.forEach(card => {

    let name = card.dataset.name;

    card.style.display =
      name.includes(input) ? "block" : "none";

  });

}


// Tool Navigation

function openTool(name) {

  alert(name.toUpperCase() +
    " TOOL WILL BE AVAILABLE SOON!");

}
