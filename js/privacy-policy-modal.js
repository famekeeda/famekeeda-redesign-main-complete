const openPopup = document.getElementById("openPopup");
const popupModal = document.getElementById("popupModal");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popupModal.style.display = "block";
});

closePopup.addEventListener("click", () => {
  popupModal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = "none";
  }
});
