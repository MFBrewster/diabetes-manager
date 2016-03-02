'use strict';

// const viewBox = require('./content-box-control');
const globalObjects = require('./global-objects');

const displayUserMedicines = function(users){
  let medListingTemplate = require('./handlebars-js/user-med-listing.handlebars');
    $('#med-list').append(medListingTemplate({users}));
};

const userMedicines = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/prescriptions/' + globalObjects.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    dataType: 'json'
  }).done(function(users){
    displayUserMedicines(users);
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
    medicinesDropList(medicines);
  });
};

const displayDoses = function(users){
  let medListingTemplate = require('./handlebars-js/dose-listing.handlebars');
    $('#dose-list').append(medListingTemplate({users}));
};

const userDoses = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/doses/user/' + globalObjects.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    dataType: 'json'
  }).done(function(users){
    displayDoses(users);
  });
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

const fillEditField = function(dose) {
  $("#edit-label").val(dose.label);
  $("#edit-med-drop").val(dose.medicine.name);
  $("#edit-size").val(dose.size);
  $("#edit-time").val(dose.time);
};


module.exports = {
  userMedicines,
  userDoses,
  getMeds,
  getOneDose,
};
