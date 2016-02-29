'use strict';

const userFunc = require('./user-functions');

const hideForms = function() {
  $('.content').hide();
};

const showLogIn = function() {
  $('#sign-in-window').show();
};

const switchToWindow = {
  signUp: function() {
    hideForms();
    $('#sign-up-window').show();
  },
  signIn: function() {
    hideForms();
    $('#sign-in-window').show();
  },
};

let userHandler = function() {
  $('#sign-up').on('submit', userFunc.signUp);
  $('#sign-in').on('submit', userFunc.signIn);
  $('#not-yet-user').on('click', switchToWindow.signUp);
};

$(document).ready(() => {
  userHandler();
  switchToWindow.signIn();
});
