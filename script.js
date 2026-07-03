const cards = [...document.querySelectorAll(".guide-card")];
const filters = [...document.querySelectorAll(".filter")];
const searchForm = document.querySelector(".search-panel");
const searchInput = document.querySelector("#guide-search");
const dialog = document.querySelector("#detail-dialog");
const dialogBody = document.querySelector("#dialog-body");
const dialogTitle = document.querySelector("#dialog-title");
const spoilerToggle = document.querySelector("#spoiler-toggle");
const spoilerBox = document.querySelector(".spoiler-box");
const suspectBoard = document.querySelector("#suspect-board");

const fieldTemplates = {
  crops: {
    title: "Seasonal Crops Template",
    fields: [
      "Season",
      "Seed source",
      "Purchase price",
      "Growth days",
      "Sale price",
      "Regrowth cycle",
      "Processed item",
      "Profit per day",
      "Quest uses",
    ],
  },
  residents: {
    title: "Resident Relationship Template",
    fields: [
      "Name",
      "Birthday",
      "Common location",
      "Weekly schedule",
      "Loved gifts",
      "Hated gifts",
      "Romance events",
      "Case links",
      "Spoiler level",
    ],
  },
  clues: {
    title: "Clue Timeline Template",
    fields: [
      "Date",
      "Location",
      "Related people",
      "Testimony",
      "Evidence strength",
      "Contradiction",
      "Spoiler status",
      "Ending link",
      "Verification status",
    ],
  },
  tools: {
    title: "Tool Upgrade Template",
    fields: [
      "Tool",
      "Materials",
      "Cost",
      "Prerequisites",
      "Stamina saved",
      "Unlocked area",
      "Priority",
      "Best route",
    ],
  },
  map: {
    title: "Town Location Template",
    fields: [
      "Location",
      "Open hours",
      "NPC appearances",
      "Items sold",
      "Event triggers",
      "Case relevance",
      "Seasonal changes",
    ],
  },
  endings: {
    title: "Ending Guide Template",
    fields: [
      "Ending name",
      "Trigger conditions",
      "Key dates",
      "Required relationship level",
      "Investigation requirements",
      "Missable steps",
      "Spoiler level",
    ],
  },
};

function applyFilter(type) {
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const typeMatches = type === "all" || card.dataset.type === type;
    const text = `${card.textContent} ${card.dataset.keywords}`.toLowerCase();
    const searchMatches = !query || text.includes(query);
    card.hidden = !(typeMatches && searchMatches);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(button.dataset.filter);
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const active = document.querySelector(".filter.is-active")?.dataset.filter || "all";
  applyFilter(active);
  document.querySelector("#wiki").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", () => {
  const active = document.querySelector(".filter.is-active")?.dataset.filter || "all";
  applyFilter(active);
});

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const template = fieldTemplates[button.dataset.open];
    dialogTitle.textContent = template.title;
    dialogBody.innerHTML = `<ul>${template.fields.map((field) => `<li>${field}</li>`).join("")}</ul>`;
    dialog.showModal();
  });
});

document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());

spoilerToggle.addEventListener("change", () => {
  spoilerBox.hidden = !spoilerToggle.checked;
});

const savedSuspects = JSON.parse(localStorage.getItem("grave-seasons-suspects") || "[]");

suspectBoard.querySelectorAll("input").forEach((slider, index) => {
  if (savedSuspects[index] !== undefined) {
    slider.value = savedSuspects[index];
  }

  slider.addEventListener("input", () => {
    const values = [...suspectBoard.querySelectorAll("input")].map((input) => input.value);
    localStorage.setItem("grave-seasons-suspects", JSON.stringify(values));
  });
});
