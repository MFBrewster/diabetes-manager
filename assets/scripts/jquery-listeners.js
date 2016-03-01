'use strict';

const userFunc = require('./user-functions');
const conBox = require('./content-box-control');

let userHandler = function() {
  $('#sign-up').on('submit', userFunc.signUp);
  $('#sign-in').on('submit', userFunc.signIn);
  $('#sign-out').on('click', userFunc.signOut);
  $('#change-password ').on('submit', userFunc.changePassword);

  $('#not-yet-user').on('click', conBox.switchTo.signUp);
  $('#to-sign-in').on('click', conBox.switchTo.signIn);
  $('#to-main').on('click', conBox.switchTo.main);
  $('#to-change-password').on('click', conBox.switchTo.changePassword);
  $('#to-new-medicine').on('click', conBox.switchTo.newMedicine);
};

$(document).ready(() => {
  conBox.hide();
  userHandler();
  $('#sign-in-window').show();
});
