'use strict';

// var allParksTemplate = Handlebars.compile($('#allParks').html());

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
    e.preventDefault();
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
      // email: $('#register').children('input[name="email"]').val(),
      // password: $('#register').children('input[name="password"]').val()
      // };
      api.register(credentials, cb.registerCB);
      e.preventDefault();
  }),

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    api.login(credentials, cb.loginCB);
    e.preventDefault();
  }),

  $('#logoutButton').on('click', function (e) {
    e.preventDefault();
    api.logout(cb.logoutCB);
  });

  $('#newFuture').on('submit', function(e) {
    var todoList = wrap('todo_params', form2object(this));
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
});
