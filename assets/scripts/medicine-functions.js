'use strict';

const viewBox = require('./content-box-control');
const globalObjects = require('./global-objects');

const returnToNewDose = function() {
  viewBox.fadeOut();
  $('#as-whom').html(globalObjects.user.email);
  viewBox.switchTo.newDose();
};

const returnToDoses = function() {
  viewBox.fadeOut();
  $('#as-whom').html(globalObjects.user.email);
  viewBox.switchTo.doses();
};

const newMedicine = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
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
  var formData = new FormData(e.target);
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

module.exports = {
  newMedicine,
  newDose,
};
