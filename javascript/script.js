document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

function openModal() {
  document.getElementById("loginModal").style.display = "block";
}
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function openModal2() {
  document.getElementById("loginModal2").style.display = "block";
}
function closeModal2() {
  document.getElementById("loginModal2").style.display = "none";
}

function openModal3() {
  document.getElementById("loginModal3").style.display = "block";
}
function closeModal3() {
  document.getElementById("loginModal3").style.display = "none";
}

function openModal4() {
  document.getElementById("loginModal4").style.display = "block";
}
function closeModal4() {
  document.getElementById("loginModal4").style.display = "none";
}

function openModal5() {
  document.getElementById("loginModal5").style.display = "block";
}
function closeModal5() {
  document.getElementById("loginModal5").style.display = "none";
}