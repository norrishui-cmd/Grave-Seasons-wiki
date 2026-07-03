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
    title: "四季作物模板",
    fields: ["季节", "种子来源", "采购价", "成熟天数", "单次售价", "复收周期", "加工品", "每日利润", "任务用途"],
  },
  residents: {
    title: "居民关系模板",
    fields: ["姓名", "生日", "常驻地点", "每周作息", "喜欢礼物", "讨厌礼物", "恋爱事件", "相关线索", "剧透等级"],
  },
  clues: {
    title: "线索时间线模板",
    fields: ["日期", "地点", "相关人物", "证词原文", "证据强度", "矛盾点", "是否剧透", "对应结局", "验证状态"],
  },
  tools: {
    title: "工具升级模板",
    fields: ["工具", "材料", "花费", "前置条件", "节省体力", "解锁区域", "优先级", "适合路线"],
  },
  map: {
    title: "地图地点模板",
    fields: ["地点", "营业时间", "NPC 出没", "出售物品", "事件触发", "案件关联", "季节变化"],
  },
  endings: {
    title: "结局攻略模板",
    fields: ["结局名", "触发条件", "关键日期", "必要好感", "调查要求", "错过点", "剧透等级"],
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
