'use strict';

const viewBox = require('./content-box-control');
// const dataGen = require('./data-generators.js');
const globalObjects = require('./global-objects');

const returnToNewDose = function() {
  $('.as-whom').html(globalObjects.user.email);
  viewBox.switchTo.newDose();
};

const returnToDoses = function() {
  $('.as-whom').html(globalObjects.user.email);
  viewBox.switchTo.doses();
};

const newMedicine = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: globalObjects.baseUrl + '/medicines',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    contentType: false,
    processData: false,
    data: formData
  }).done(function(){
      $('.form-field').val('');
      returnToNewDose();
  }).fail(function() {
    $('.form-field').val('');
  });
};

const newDose = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  formData.append("doses[user_id]", globalObjects.user.id);
  $.ajax({
    url: globalObjects.baseUrl + '/doses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    contentType: false,
    processData: false,
    data: formData
  }).done(function(){
      $('.form-field').val('');
      returnToDoses();
  }).fail(function() {
    $('.form-field').val('');
  });
};

const editDose = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  formData.append("doses[user_id]", globalObjects.user.id);
  $.ajax({
    url: globalObjects.baseUrl + '/doses/' + globalObjects.editId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    contentType: false,
    processData: false,
    data: formData
  }).done(function(){
      $('.form-field').val('');
      returnToDoses();
  }).fail(function() {
    $('.form-field').val('');
  });
};

const deleteDose = function(e) {
  e.preventDefault();
  let doseId = $(e.target).attr('data-id');
  console.log(doseId);
  $.ajax({
    url: globalObjects.baseUrl + '/doses/' + doseId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    }
  }).done(function(){
    returnToDoses();
  });
};

module.exports = {
  newMedicine,
  newDose,
  deleteDose,
  editDose,
};
