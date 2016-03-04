'use strict';

// const viewBox = require('./content-box-control');
const globalObjects = require('./global-objects');

const displayUserMedicines = function(medicines){
  let medListingTemplate = require('./handlebars-js/user-med-listing.handlebars');
    $('#med-list').append(medListingTemplate({medicines}));
};

const userMedicines = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/medicines?limit=user',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    dataType: 'json'
  }).done(function(data){
    displayUserMedicines(data);
  });
};

const medicinesDropList = function(medicines){
  let medListingTemplate = require('./handlebars-js/med-listing.handlebars');
    $('.medicine-drop-list').append(medListingTemplate({medicines}));
};

const getMeds = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/medicines',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    }
  }).done(function(medicines){
    console.log(medicines);
    medicinesDropList(medicines);
  });
};

const displayDoses = function(doses){
  let medListingTemplate = require('./handlebars-js/dose-listing.handlebars');
    $('#dose-list').append(medListingTemplate({doses}));
};

const userDoses = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/doses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    dataType: 'json'
  }).done(function(doses){
    displayDoses(doses);
  });
};

const fillEditField = function(dose) {
  $("#edit-label").val(dose.label);
  $("#edit-med-drop").val(dose.medicine.name);
  $("#edit-size").val(dose.size);
  $("#edit-time").val(dose.time);
};

const getOneDose = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/doses/' + globalObjects.editId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    }
  }).done(function(data){
    fillEditField(data.dose);
  }).fail(function(data) {
    console.error(data);
  });
};

module.exports = {
  userMedicines,
  userDoses,
  getMeds,
  getOneDose,
};
