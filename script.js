const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    menuBtn.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-faq]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const tabButtons = document.querySelectorAll("[data-tab-target]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tabTarget;
    tabButtons.forEach((tab) => tab.classList.toggle("active", tab === button));
    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.tabPanel === target);
    });
  });
});
