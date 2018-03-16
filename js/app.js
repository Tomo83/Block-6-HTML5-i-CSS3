'use strict';

var button = document.querySelector('nav button');
var menu = document.querySelector('nav ul');
var mHeight = 380 + 'px';

var show = function show() {
  menu.style.height = mHeight;
};

var hide = function hide() {
  menu.style.height = 0 + 'px';
};

var toggle = function toggle() {
  if (menu.style.height === mHeight) {
    hide();
  } else {
    show();
  }
};
button.addEventListener('click', toggle, false);