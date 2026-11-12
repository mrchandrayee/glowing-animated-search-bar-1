const form = document.querySelector("#searchForm");
const input = document.querySelector("#search-input");
const filterToggle = document.querySelector("#filterToggle");
const filterMenu = document.querySelector("#filterMenu");
const applyFilters = document.querySelector("#applyFilters");
const feedback = document.querySelector("#searchFeedback");
const toast = document.querySelector("#toast");
let toastTimer;

function notify(message) {
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.textContent = "", 1800);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const query = input.value.trim();
  feedback.textContent = query ? `Searching for “${query}”` : "Type something to search";
  input.focus();
});

filterToggle.addEventListener("click", () => {
  const open = filterToggle.getAttribute("aria-expanded") !== "true";
  filterToggle.setAttribute("aria-expanded", String(open));
  filterMenu.hidden = !open;
  if (open) filterMenu.querySelector("input")?.focus();
});

applyFilters.addEventListener("click", () => {
  const selected = [...filterMenu.querySelectorAll("input:checked")].map(item => item.value);
  feedback.textContent = selected.length ? `Filters: ${selected.join(", ")}` : "All search categories selected";
  filterMenu.hidden = true;
  filterToggle.setAttribute("aria-expanded", "false");
  input.focus();
});

document.addEventListener("click", event => {
  if (!event.target.closest(".search-wrap")) {
    filterMenu.hidden = true;
    filterToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".social-actions button").forEach(button => {
  button.addEventListener("click", async () => {
    button.classList.toggle("active");
    if (button.id === "shareButton" && navigator.share) {
      try {
        await navigator.share({title:"Glowing Animated Search Bar",text:"A glowing animated search bar made with HTML and CSS."});
      } catch (_) {}
      return;
    }
    notify(button.id === "likeButton" ? "Thanks for the love!" :
      button.id === "saveButton" ? "Saved this search bar demo." : "Share this demo.");
  });
});
