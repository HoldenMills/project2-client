'use strict';

var test;
var token;
// var session = {
//   userId: null,
//   token: null,
// };

var cb = {

  allParksTemplate: Handlebars.compile($('#allParks').html()),

  allFutureTripsTemplate: Handlebars.compile($('#allFutureTrips').html()),

  init: function(){
    Handlebars.registerHelper('ifOnLoan', function (conditionalVariable, options){
      if (conditionalVariable === options.hash.value) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
  },

  newProfileCB: function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("success:", data);
    }
  },

  getProfileCB: function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  },

  registerCB: function(err, data){
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  },

  loginCB: function(err, data){
    if (err) {
      console.error("error", err);
      $(".user-messages").html("<strong>Error! Login fail!</strong>");
    } else {
      api.getParks(cb.getParksCB);
      // api.getProfile(cb.getProfileCB);
      token = data.user.token;
      // session.userId = data.user.id;
      // session.token = data.user.token;
      data.user.current_user = true;
      // api.getUser(cb.getUserCB);
      console.log("login response:", data);
      console.log(data.profile);
      ux.afterLogin();
    }
  },

  logoutCB: function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("success:", data);
    }
  },

  getParksCB: function(err, data) {
    if (err) {
      console.log(err);
    } else {
      var myHTML = cb.allParksTemplate({park: data.parks});
      $('.dropdown').append(myHTML);
      console.log({park: data.parks});
    }
  },

  newFutureTripCB: function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('working',data);
    }
  },

  showFutureTripsCB: function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      var myHTML = cb.allFutureTripsTemplate({future_trips: data.future_trips});
      $('#futureList').append(myHTML);
      ux.viewFuture();
    }
  },

  deleteFutureTripCB: function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  },

 mainSearchCB: function(err, data){
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      var rowHTML = cb.allProdsTemplate({products: data});
      $("#allProdsPage").html(rowHTML);
    }
  },

// getUserCB: function(err, data){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // $('#loginMessage').html("Hello " + data.email);
  //     console.log(data);
  //   }
  // },

};
