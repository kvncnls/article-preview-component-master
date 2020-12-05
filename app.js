console.log("Hi there! Follow me on Twitter: @kvncnls. :D");

const shareBtn = document.querySelector(".share");
const socialMedia = document.querySelector(".social-media");
const user = document.querySelector(".user");
const bottom = document.querySelector(".bottom");
const middle = document.querySelector(".middle");
const graphic = document.querySelector(".graphic");

const closeMenuArray = [middle, graphic];

shareBtn.addEventListener("click", () => {
  showSocialMedia();
  activeBottom();
  hideUser();
  shareBtnActive();
});

function showSocialMedia() {
  socialMedia.classList.toggle("active");
}

function activeBottom() {
  bottom.classList.toggle("active");
}

function hideUser() {
  user.classList.toggle("hide");
}

function shareBtnActive() {
  shareBtn.classList.toggle("active");
}

closeMenuArray.forEach((item) => {
  item.addEventListener("click", () => {
    socialMedia.classList.remove("active");
    bottom.classList.remove("active");
    user.classList.remove("hide");
    shareBtn.classList.remove("active");
  });
});
