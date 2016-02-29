'use strict';

const baseUrl = 'http://localhost:3000';

const signUp = function signUp(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: baseUrl + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData
  }).done(function(data) {
    console.log(data);
  }).fail(function(jqxhr) {
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
  }).done(function(data) {
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};


module.exports = {
  signUp,
  signIn,
};
