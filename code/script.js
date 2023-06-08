const openBtn = document.getElementById("showMenu");
const closeBtn = document.getElementById("hideMenu");
const menu = document.querySelector(".menu");
const loginModal = document.querySelector(".login");
const signUpModal = document.querySelector(".signup");
const lLink = document.getElementById("signInLink");
const sLink = document.getElementById("signUpLink");
const user = document.getElementById("user");
const modalClose = Array.from(document.querySelectorAll(".modal span"));

openBtn.addEventListener("click", function () {
  menu.classList.remove("hidden");
  closeBtn.style.display = "inline";
  this.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hidden");
  openBtn.style.display = "inline";
  this.style.display = "none";
});

user.addEventListener("click", function () {
  loginModal.classList.remove("hidden");
});
lLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.classList.remove("hidden");
  signUpModal.classList.add("hidden");
});
sLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.classList.add("hidden");
  signUpModal.classList.remove("hidden");
});

modalClose.forEach((closeIcon) =>
  closeIcon.addEventListener("click", function (e) {
    const parent =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    parent.classList.add("hidden");
  })
);
