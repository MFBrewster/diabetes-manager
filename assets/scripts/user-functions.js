'use strict';

const conBox = require('./content-box-control');
const globalObjects = require('./global-objects');
const baseUrl = 'http://localhost:3000';

const signInSuccess = function(data) {
  globalObjects.user = data.user;
  conBox.fadeOut();
  $('#as-whom').html(globalObjects.user.email)
  conBox.switchTo.main();
};

const signUp = function signUp(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: baseUrl + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData
  }).done(function(data){ signInSuccess(data); } )
    .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

const signIn = function signUp(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: baseUrl + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData
  }).done(function(data){ signInSuccess(data); } )
    .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

module.exports = {
  signUp,
  signIn,
};
