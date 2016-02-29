'use strict';

//const globalObjects = require('./global-objects');
const delayTime = 200;

const hide = function() {
  $('.content').hide();
};

const fadeOut = function() {
  $('.content').fadeOut(delayTime);
};

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
  }
};

// const showUserOpts = function() {
//
// };

module.exports = {
  hide,
  fadeOut,
  switchTo,
};
