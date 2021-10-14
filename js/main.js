"use strict";

const burgerButton = document.querySelector(`.side-menu__burger`);
const sideMenuInput = document.querySelector(`.side-menu__input`);
const sideMenu = document.querySelector(`.side-menu`);
const containers = document.querySelectorAll(`.container`);
const sideMenuHide = document.querySelectorAll(`.side-menu__hide`);
const projectButton = document.querySelector(`.side-menu__project-button`);
const sideMenuFooterWrapper = document.querySelector(`.side-menu__footer-wrapper`);
const sideMenuFooter = document.querySelector(`.side-menu__footer`);
const sideMenuHeader = document.querySelector(`.side-menu__header`);


// Open menu

const openMenu = () => {
  sideMenuHide.forEach((item) => {
    if (!item.classList.contains(`hidden`)) {
      item.classList.add(`hidden`);
    } else {
      item.classList.remove(`hidden`);
    }
  });
  containers.forEach((item) => {
    if (!item.classList.contains(`container--active`)) {
      item.classList.add(`container--active`);
    } else {
      item.classList.remove(`container--active`);
    }
  });
  if (!sideMenuInput.classList.contains(`side-menu__input--small`)) {
    sideMenuInput.classList.add(`side-menu__input--small`);
  } else {
    sideMenuInput.classList.remove(`side-menu__input--small`);
  }
  if (!sideMenu.classList.contains(`side-menu--open`)) {
    sideMenu.classList.add(`side-menu--open`);
  } else {
    sideMenu.classList.remove(`side-menu--open`);
  }
  if (!projectButton.classList.contains(`side-menu__project-button--active`)) {
    projectButton.classList.add(`side-menu__project-button--active`);
  } else {
    projectButton.classList.remove(`side-menu__project-button--active`);
  }
  sideMenuFooterWrapper.classList.toggle(`side-menu__footer-wrapper`);
  sideMenuFooter.classList.toggle(`side-menu__footer--active`);

};
burgerButton.addEventListener(`click`, openMenu);

// Tabs

const sideMenuItems = document.querySelectorAll(`.side-menu__item`);
const sideMenuLinks = document.querySelectorAll(`.side-menu__link`);
const sideMenuSvgs = document.querySelectorAll(`.side-menu__svg`);
const itemsParent = document.querySelector(`.side-menu__list`);

const hideContent = () => {
  sideMenuItems.forEach((item) => {
    item.classList.remove(`side-menu__item--active`);
    item.classList.remove(`side-menu__item-white--active`);
  });
  sideMenuLinks.forEach((item) => {
    item.classList.remove(`side-menu__link--active`);
    item.classList.remove(`side-menu__link-white--active`);
  });
  sideMenuSvgs.forEach((item) => {
    item.classList.remove(`side-menu__svg--active`);
    item.classList.remove(`side-menu__svg-white--active`);
  });
};

const showContent = (i = 0) => {
  if (!sideMenu.classList.contains("color-body")) {
    sideMenuItems[i].classList.add(`side-menu__item--active`);
    sideMenuLinks[i].classList.add(`side-menu__link--active`);
    sideMenuSvgs[i].classList.add(`side-menu__svg--active`);
  } else {
    sideMenuItems[i].classList.add(`side-menu__item-white--active`);
    sideMenuLinks[i].classList.add(`side-menu__link-white--active`);
    sideMenuSvgs[i].classList.add(`side-menu__svg-white--active`);
  }
};

hideContent();
showContent();

itemsParent.addEventListener(`click`, (evt) => {
  const target = evt.target.closest(".side-menu__item");
  if (target && target.classList.contains(`side-menu__item`)) {
    sideMenuItems.forEach((key, i) => {
      if (target === key) {
        hideContent();
        showContent(i);
      }
    });
  }
});

// Theme

const checkboxInput = document.querySelector(`.checkbox__input`);
const logoImages = document.querySelectorAll(`.side-menu__logo-image`);
const menuActive = document.querySelector(".side-menu__item--active");

const test = () => {
  if (menuActive.classList.contains("side-menu__item--active")) {
    menuActive.classList.add("side-menu__item-white--active");
    menuActive.classList.remove("side-menu__item--active");
  } else {
    menuActive.classList.remove("side-menu__item-white--active");
    menuActive.classList.add("side-menu__item--active");
  }
};

const themeChange = () => {
  logoImages.forEach((item) => {
    item.classList.toggle(`hidden`);
  });
  sideMenuHeader.classList.toggle(`color`);
  sideMenuFooter.classList.toggle(`color`);
  sideMenu.classList.toggle(`color-body`);
  test();
  hideContent();
  showContent();
};

checkboxInput.addEventListener(`change`, themeChange);
