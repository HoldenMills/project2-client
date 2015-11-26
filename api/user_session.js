'use strict';

var url = 'http://www.localhost:3000';
//$(document).ready(...
$(document).ready (function() {

  var form2object = function(form) {
    var data = {};
    $(form).children().each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
  };
  return data;
  });

  var wrap = function wrap(root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    api.register(credentials, cb.registerCB);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        cb.loginCB;
        return;
      }
    e.preventDefault();
    url.login(credentials, cb);
    };
  });
};

