const shareBtn = document.querySelector(".share");
const socialMedia = document.querySelector(".social-media");
const user = document.querySelector(".user");
const bottom = document.querySelector(".bottom");

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
