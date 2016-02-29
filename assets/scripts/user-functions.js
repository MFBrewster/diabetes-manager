'use strict';

const signUp = function signUp(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: 'http://localhost:3000/sign-up',
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
};
