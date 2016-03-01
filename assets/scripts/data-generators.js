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
    $('#medicine-drop-list').append(medListingTemplate({medicines}));
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

const displayDoses = function(users){
  let medListingTemplate = require('./handlebars-js/dose-listing.handlebars');
    $('#dose-list').append(medListingTemplate({users}));
};

const userDoses = function() {
  $.ajax({
    url: globalObjects.baseUrl + '/doses/' + globalObjects.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + globalObjects.user.token,
    },
    dataType: 'json'
  }).done(function(users){
    displayDoses(users);
  });
};


module.exports = {
  userMedicines,
  userDoses,
  getMeds,
};
