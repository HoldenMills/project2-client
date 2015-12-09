'use strict';

var url = 'http://www.localhost:3000';
//$(document).ready(...

  var form2object = function(form) {
    var data = {};
    $(form).children().each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
    return data;
  };

  var wrap = function wrap(root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;
  };

  var cb = function callback(error, data) {
    if (error) {
      console.error(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
    console.log(data);
  };

$(document).ready (function() {

  // ux.login();
  // cb.init();

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    api.register(credentials, cb.registerCB);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    $('.enter').hide(900);
    $('.park_list').show(800);
    var credentials = wrap('credentials', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        cb.loginCB;
        return;
      }
    url.login(credentials, cb);
    e.preventDefault();
    };
  });
});
