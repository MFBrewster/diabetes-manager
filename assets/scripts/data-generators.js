'use strict';

// const viewBox = require('./content-box-control');
const globalObjects = require('./global-objects');

const displayMedicines = function(users){
  let medListingTemplate = require('./med-listing.handlebars');
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
    displayMedicines(users);
  });
};

module.exports = {
  userMedicines,
};
