'use strict';

const conBox = require('./content-box-control');
const globalObjects = require('./global-objects');

const successToMain = function() {
  conBox.fadeOut();
  $('#as-whom').html(globalObjects.user.email);
  conBox.switchTo.main();
};

const assignUserData = function(data) {
  globalObjects.user = data.user;
};

const signUp = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: globalObjects.baseUrl + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData
  }).done(function(data){
    $('.form-field').val('');
    assignUserData(data);
    successToMain();
  }).fail(function(jqxhr) {
    $('.form-field').val('');
    console.error(jqxhr);
  });
};

const signIn = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: globalObjects.baseUrl + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData
  }).done(function(data){
      $('.form-field').val('');
      assignUserData(data);
      successToMain();
  }).fail(function(jqxhr) {
    $('.form-field').val('');
    console.error(jqxhr);
  });
};

const signOut = function() {
  if (!globalObjects.user) {
    console.error('Wrong!');
  }

  $.ajax({
    url: globalObjects.baseUrl + '/sign-out/' + globalObjects.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    }
  }).done(function() {
    globalObjects.user = {};
    conBox.fadeOut();
    conBox.switchTo.signIn();
  }).fail(function(data) {
    console.error(data);
  });
};

const changePassword = function(e) {
  e.preventDefault();
  if (!globalObjects.user) {
    console.error('Wrong!');
  }

  var formData = new FormData(e.target);
  $.ajax({
    url: globalObjects.baseUrl + '/change-password/' + globalObjects.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  }).done(function() {
    $('.form-field').val('');
    successToMain();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
    $('.form-field').val('');
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
