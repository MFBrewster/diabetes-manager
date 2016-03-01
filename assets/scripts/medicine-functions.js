'use strict';

const viewBox = require('./content-box-control');
const globalObjects = require('./global-objects');

const returnToMain = function() {
  viewBox.fadeOut();
  $('#as-whom').html(globalObjects.user.email);
  viewBox.switchTo.main();
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
  }).done(function(data){
      $('.form-field').val('');
      console.log(data);
      returnToMain();
  }).fail(function(jqxhr) {
    $('.form-field').val('');
    console.error(jqxhr);
  });
};

module.exports = {
  newMedicine,
};
