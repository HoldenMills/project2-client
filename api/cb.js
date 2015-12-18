'use strict';

var test;
var token;
var session = {
  userId: null,
  token: null,
};

var cb = {

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
      // $(".user-messages").html("<strong>Error! Login fail!</strong>");
    } else {
        // $('.token').val(data.user.token);
        // $('.id').val(data.user.id);
        console.log(data.user.token);
        session.token = data.user.token;
        session.userId = data.user.id;
      // api.getProfile(cb.getProfileCB);
      // token = data.user.token;
      // session.userId = data.user.id;
      // session.token = data.user.token;
      data.user.current_user = true;
      $('#loginMessage').html("Hello " + data.user.email);
      // api.getUser(cb.getUserCB);
      console.log("login response:", data);
    }
  },


  logoutCB: function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("success:", data);
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

  // getUserCB: function(err, data){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     $('#loginMessage').html("Hello " + data.email);
  //     console.log('Hello');
  //     console.log(data.email);
  //   }
  // },
};
