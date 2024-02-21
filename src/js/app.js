import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/fslightbox.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера foodSlider
document.querySelectorAll('.introSlider').forEach(n => {
  const mySwiperDepartment = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: n.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
});


let catalogActionFilterBtn = document.querySelector('.catalogActionFilterBtn');
let catalogActionFilterClose = document.querySelector('.catalogActionFilterClose');
let catFixed = document.querySelector('.catFixed');
let catalogHeadFixed = document.querySelector('.catalogFixed');
let bodyEl = document.querySelector('body');
let overlay = document.querySelector('.overlay');
catalogActionFilterBtn?.addEventListener('click', () => {
  catFixed.classList.add('active');
  bodyEl.classList.add('hidden');
  catalogHeadFixed.classList.add('hide');
  toggleOverlay();
});
catalogActionFilterClose.addEventListener('click', () => {
  catFixed.classList.remove('active');
  bodyEl.classList.remove('hidden');
  catalogHeadFixed.classList.remove('hide');
  toggleOverlay();
});
const toggleOverlay = function () {
  overlay.classList.toggle('active');
}
let footerNavItemBtn = document.querySelector('.footerNavItemBtn');
let callPerson = document.querySelector('.callPerson');
footerNavItemBtn?.addEventListener('click', () => {
  callPerson.classList.toggle('active');
  bodyEl.classList.toggle('hidden');
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerSidebar');
const closeMenu = document.querySelector('.headerSidebarClose');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleOverlay();
});
closeMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleOverlay();
});

let headerAuthorizeBtn = document.querySelector('.headerAuthorizeBtn');
let headerSidebarAuthorizeBtn = document.querySelector('.headerSidebarAuthorizeBtn');
let headerAuthorizeBack = document.querySelector('.headerAuthorizeBack');
let authorizeForgotBtn = document.querySelector('.authorizeForgotBtn');

let headerAuthorize = document.querySelector('.headerAuthorize');
let headerForgotPassword = document.querySelector('.headerForgotPassword');
let headerRegister = document.querySelector('.headerRegister');
headerAuthorizeBtn.addEventListener('click', () => {
  headerAuthorize.classList.add('active');
});
headerSidebarAuthorizeBtn.addEventListener('click', () => {
  headerAuthorize.classList.add('active');
  headerRegister.classList.remove('active');
});
headerAuthorizeBack.addEventListener('click', () => {
  headerAuthorize.classList.remove('active');
});

let headerSidebarRegisterBtn = document.querySelector('.headerSidebarRegisterBtn');
let headerRegisterBack = document.querySelector('.headerRegisterBack');

headerSidebarRegisterBtn.addEventListener('click', () => {
  headerAuthorize.classList.remove('active');
  headerRegister.classList.add('active');
});
headerRegisterBack.addEventListener('click', () => {
  headerRegister.classList.remove('active');
  headerAuthorize.classList.add('active');
});
authorizeForgotBtn.addEventListener('click', () => {
  headerAuthorize.classList.remove('active');
  headerForgotPassword.classList.add('active');
});

let headerForgotPasswordBack = document.querySelector('.headerForgotPasswordBack');
headerForgotPasswordBack.addEventListener('click', () => {
  headerForgotPassword.classList.remove('active');
  headerAuthorize.classList.add('active');
});

// show verification empty
let sendCodeBtn = document.querySelector('.sendCodeBtn');
let headerVerifyEmpty = document.querySelector('.headerVerifyEmpty');
let headerVerifyEmptyBack = document.querySelector('.headerVerifyEmptyBack');
sendCodeBtn.addEventListener('click', () => {
  headerForgotPassword.classList.remove('active');
  headerVerifyEmpty.classList.add('active');
});

headerVerifyEmptyBack.addEventListener('click', () => {
  headerVerifyEmpty.classList.remove('active');
  headerForgotPassword.classList.add('active');
});


let dirCheckboxLabel = document.querySelector('.dirCheckboxLabel');
let inputDirW = document.querySelector('.inputDirW');
dirCheckboxLabel?.addEventListener('click', () => {
  let inputDir = dirCheckboxLabel.closest('.agreement').querySelector('#dirCheckbox');
  if (inputDir.checked == true) {
    inputDirW.classList.remove('active');
  } else {
    inputDirW.classList.add('active');
  }
});


overlay.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.remove('active');
  menu.classList.remove('active');
  btnMenu.classList.remove('active');
  bodyEl.classList.remove('hidden');
  catFixed.classList.remove('active');
  bodyEl.classList.remove('hidden');
  catalogHeadFixed.classList.remove('hide');
});