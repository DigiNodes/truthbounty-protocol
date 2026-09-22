const screens = new Set(["claimant", "verifier", "admin", "claim-detail", "create-claim"]);
const roleSelect = document.querySelector("#role-select");
const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#scrim");
const menuButton = document.querySelector("#menu-button");
const toast = document.querySelector("#toast");
let toastTimer;

function openMenu() {
  sidebar.classList.add("open");
  scrim.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  sidebar.classList.remove("open");
  scrim.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function setRole(role, navigate = true) {
  roleSelect.value = role;
  document.querySelectorAll("[data-role-group]").forEach(group => {
    const visible = role === "admin" || group.dataset.roleGroup === role;
    group.hidden = !visible;
  });
  if (navigate) showScreen(role);
  showToast(`${role[0].toUpperCase()}${role.slice(1)} context selected`);
}

function showScreen(name) {
  const actual = screens.has(name) ? name : "placeholder";
  document.querySelectorAll("[data-screen-panel]").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.screenPanel === actual);
  });
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.screen === name);
  });
  if (actual === "placeholder") {
    const label = name.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase());
    document.querySelector("#placeholder-title").textContent = `${label} is specified but not expanded here`;
  }
  document.querySelector("main").scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector("#main").focus({ preventScroll: true });
  closeMenu();
}

document.querySelectorAll("[data-screen]").forEach(control => {
  control.addEventListener("click", () => showScreen(control.dataset.screen));
});
menuButton.addEventListener("click", openMenu);
document.querySelector("#close-menu").addEventListener("click", closeMenu);
scrim.addEventListener("click", closeMenu);
roleSelect.addEventListener("change", event => setRole(event.target.value));
document.querySelector("#theme-button").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme === "dark";
  root.dataset.theme = dark ? "light" : "dark";
  showToast(`${dark ? "Light" : "Dark"} theme enabled`);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

setRole("claimant", false);
