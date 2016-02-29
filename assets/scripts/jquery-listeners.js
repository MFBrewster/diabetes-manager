'use strict';

const userFunc = require('./user-functions');
const conBox = require('./content-box-control');

let userHandler = function() {
  $('#sign-up').on('submit', userFunc.signUp);
  $('#sign-in').on('submit', userFunc.signIn);
  $('#not-yet-user').on('click', conBox.switchTo.signUp);
  $('#to-sign-in').on('click', conBox.switchTo.signIn);
  //$('#signed-in-as').hover();
};

$(document).ready(() => {
  conBox.hide();
  userHandler();
  $('#sign-in-window').show();
});
