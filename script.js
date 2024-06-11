"use strict";

/* ALL PAGES */

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const pageHero = document.querySelector(".page-hero");

// Nav Dropdown

const isOpen = dropDownMenu.classList.contains("open");

const toggleMobileNavIcon = function () {
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const toggleMobileNav = function () {
  dropDownMenu.classList.toggle("open");
  toggleMobileNavIcon();
};

const closeMobileNav = function () {
  dropDownMenu.classList.remove("open");
  toggleMobileNavIcon();
};

toggleBtn.addEventListener("click", toggleMobileNav);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMobileNav();
});
document.querySelector("main").addEventListener("click", closeMobileNav);

// Sticky Nav

const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

if (hero) heroObserver.observe(hero);
if (pageHero) heroObserver.observe(pageHero);
