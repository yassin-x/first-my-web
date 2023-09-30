const showPopup = document.querySelector(".show-p");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const switcherLis = document.querySelectorAll(".switcher li");
const imgs = Array.from(document.querySelectorAll(".data img"));

showPopup.onclick = () => {
  popupContainer.classList.add("active");
};
closeBtn.onclick = () => {
  popupContainer.classList.remove("active");
};

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.switch).forEach((el) => {
    el.style.display = "block";
  });
}
