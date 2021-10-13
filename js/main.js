"use strict";

const burgerButton = document.querySelector(".side-menu__burger");
const burgerOpenCloseButtons = document.querySelectorAll(".side-menu__burger svg");
const mainLogo = document.querySelector(".side-menu__logo");
const sideMenuLinkSpans = document.querySelectorAll(".side-menu__link span");
const bottomListTexts = document.querySelectorAll(".bottom-list__text");
const sideMenuInput = document.querySelector(".side-menu__input");
const sideMenu = document.querySelector(".side-menu");
const containers = document.querySelectorAll(".container");

// Open menu

const openMenu = () => {
  burgerOpenCloseButtons.forEach((item) => {
    item.classList.toggle("hidden");
  });
  if (!mainLogo.classList.contains("hidden")) {
    mainLogo.classList.add("hidden");
  } else {
    mainLogo.classList.remove("hidden");
  }
  sideMenuLinkSpans.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
  bottomListTexts.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
  if (!sideMenuInput.classList.contains("side-menu__input--small")) {
    sideMenuInput.classList.add("side-menu__input--small");
  } else {
    sideMenuInput.classList.remove("side-menu__input--small");
  }
  if (!sideMenu.classList.contains("side-menu--open")) {
    sideMenu.classList.add("side-menu--open");
  } else {
    sideMenu.classList.remove("side-menu--open");
  }
  containers.forEach((item) => {
    if (!item.classList.contains("container--active")) {
      item.classList.add("container--active");
    } else {
      item.classList.remove("container--active");
    }
  });
};

burgerButton.addEventListener("click", openMenu);

// Tabs

const sideMenuItems = document.querySelectorAll(".side-menu__item");
const sideMenuLinks = document.querySelectorAll(".side-menu__link");
const sideMenuSvgs = document.querySelectorAll(".side-menu__svg");

const hideContent = () => {
  sideMenuItems.forEach((item) => {
    item.classList.remove("side-menu__item--active");
  });
  sideMenuLinks.forEach((item) => {
    item.classList.remove("side-menu__link--active");
  });
  sideMenuSvgs.forEach((item) => {
    item.classList.remove("side-menu__svg--active");
  });
};

const showContent = (i = 2) => {
  sideMenuItems[i].classList.add("side-menu__item--active");
  sideMenuLinks[i].classList.add("side-menu__link--active");
  sideMenuSvgs[i].classList.add("side-menu__svg--active");
};

hideContent();
showContent();
