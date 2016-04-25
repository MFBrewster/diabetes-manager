'use strict';

const globalObjects = require('./global-objects');
const userFunc = require('./user-functions');
const medFunc = require('./medicine-functions');
const viewBox = require('./content-box-control');

const editSetIdAndGo = function(e) {
  e.preventDefault();
  globalObjects.editId = $(e.target).attr('data-id');
  viewBox.switchTo.editDose();
};

let userHandler = function() {
  $('#sign-up').on('submit', userFunc.signUp);
  $('#sign-in').on('submit', userFunc.signIn);
  $('.sign-out').on('click', userFunc.signOut);
  $('#change-password ').on('submit', userFunc.changePassword);

  $('#new-medicine').on('submit', medFunc.newMedicine);
  $('#new-dose').on('submit', medFunc.newDose);
  $('#edit-dose').on('submit', medFunc.editDose);
  $('#dose-list').on('click', '.delete-dose', medFunc.deleteDose);

  $('#dose-list').on('click', '.edit-dose', editSetIdAndGo);
  $('#not-yet-user').on('click', viewBox.switchTo.signUp);
  $('#to-sign-in').on('click', viewBox.switchTo.signIn);
  $('.to-main').on('click', viewBox.switchTo.main);
  $('.to-change-password').on('click', viewBox.switchTo.changePassword);
  $('.to-new-medicine').on('click', viewBox.switchTo.newMedicine);
  $('#to-medicines').on('click', viewBox.switchTo.medicines);
  $('#to-doses').on('click', viewBox.switchTo.doses);
  $('.to-new-dose').on('click', viewBox.switchTo.newDose);
};

$(document).ready(() => {
  document.location.hostname === 'localhost' ?
    globalObjects.baseUrl = 'http://localhost:3000' :
    globalObjects.baseUrl = 'https://diabetes-manager.herokuapp.com/';
  viewBox.hide();
  userHandler();
  $('#sign-in-window').show();
});
