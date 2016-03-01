'use strict';

// const globalObjects = require('./global-objects');
const delayTime = 200;

const hide = function() {
  $('.content').hide();
};

const fadeOut = function() {
  $('.content').fadeOut(delayTime);
};

// const clearForm = function() {
//   $('.form-field').val('');
// };

const switchTo = {
  signUp: function() {
    fadeOut();
    $('#sign-up-window').delay(delayTime).fadeIn();
  },
  signIn: function() {
    fadeOut();
    $('#sign-in-window').delay(delayTime).fadeIn();
  },
  main: function() {
    fadeOut();
    $('#main-window').delay(delayTime).fadeIn();
  },
  changePassword: function() {
    fadeOut();
    $('#change-password-window').delay(delayTime).fadeIn();
  },
  newMedicine: function() {
    fadeOut();
    $('#new-medicine-window').delay(delayTime).fadeIn();
  },
};


module.exports = {
  hide,
  fadeOut,
  switchTo,
};
