// nav
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// fags

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq-icon i");
    if (icon.className === "ul uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Swipper configration
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// media nav 
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

 menuBtn.addEventListener('click' , () => {
  menu.style.display = "flex";
  closeBtn.style.display="inline-block";
  menuBtn.style.display ="none";
 })

 const closeNav = () => {
  menu.style.display="none";
  closeBtn.style.display="none";
  menuBtn.style.display="inline-block";
 }

closeBtn.addEventListener('click', closeNav);