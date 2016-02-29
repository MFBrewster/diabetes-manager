'use strict';

const userFunc = require('./user-functions');

const hideForms = function(e) {
    $('user-form').hide();
}

let userHandler = function() {
  $('#sign-up').on('submit', userFunc.signUp);
};

$(document).ready(() => {
  userHandler();
});
