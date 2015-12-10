'use strict';

var url = 'http://www.localhost:3000';

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

$(document).ready (function() {

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    api.register(credentials, cb.registerCB);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    api.login(credentials, cb.loginCB);
    e.preventDefault();
  });

  $('#future').on('click', function(e){
    // var futureList =
    api.futureTrip(cb.futureTripCB);
    e.preventDefault();
  });
  // clickHandler.on(something, function(){
  //   api.something(...,callback);
  //   in your callback, set the ux view
  // });

});
