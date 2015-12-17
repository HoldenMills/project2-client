'use strict';

var allParksTemplate = Handlebars.compile($('#allParks').html());

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
    var registrationInfo = {
      "credentials": {
      email: $('#register').children('input[name="email"]').val(),
      password: $('#register').children('input[name="password"]').val()
      },
      "profile": {
        username: $('#register').children('input[name="username"]').val()
      }
    };
      api.register(registrationInfo, cb.registerCB);
      e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var registrationInfo = {
      "credentials": {
      email: $('#login').children('input[name="email"]').val(),
      password: $('#login').children('input[name="password"]').val()
      },
      "profile": {
        username: $('#login').children('input[name="username"]').val()
      }
    };
    api.login(registrationInfo, cb.loginCB);
    e.preventDefault();
  });

  $('#newFuture').on('submit', function(e) {
    var future_trip = wrap('future_trip', form2object(this));
    api.newFutureTrip(future_trip, cb.newFutureTripCB);
    e.preventDefault();
  });

  $('#future').on('click', function(e) {
    api.showFutureTrips(cb.showFutureTripsCB);
    e.preventDefault();
  });

  $('#futureList').on('click', ".delete", function(e) {
    var id = $(e.target).data('id');
    api.deleteFutureTrip(id, cb.deleteFutureTripCB);
  });
  // clickHandler.on(something, function(){
  //   api.something(...,callback);
  //   in your callback, set the ux view
  // });

});
