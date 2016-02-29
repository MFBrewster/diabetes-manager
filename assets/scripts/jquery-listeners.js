'use strict';

const userFunc = require('./user-functions');

const delayTime = 200;

const hideForms = function() {
  $('.content').hide();
};

const fadeOutForms = function() {
  $('.content').fadeOut(delayTime);
};

const switchToWindow = {
  signUp: function() {
    fadeOutForms();
    $('#sign-up-window').delay(delayTime).fadeIn();
  },
  signIn: function() {
    fadeOutForms();
    $('#sign-in-window').delay(delayTime).fadeIn();
  },
};

let userHandler = function() {
  $('#sign-up').on('submit', userFunc.signUp);
  $('#sign-in').on('submit', userFunc.signIn);
  $('#not-yet-user').on('click', switchToWindow.signUp);
};

$(document).ready(() => {
  hideForms();
  userHandler();
  $('#sign-in-window').show();
});
