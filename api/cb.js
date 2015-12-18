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
      $('#registerMessage').html("Surprise! Something went wrong. Please refresh and try again.");
      console.error(err);
    } else {
      $('#registerMessage').html("Hello New User " + data.user.email);
      console.log(data);
      ux.afterRegister();
    }
  },

  loginCB: function(err, data){
    if (err) {
      console.error("error", err);
      $("#loginMessage").html("<strong>Error! Login fail!</strong>");
    } else {
        // $('.token').val(data.user.token);
        // $('.id').val(data.user.id);
        console.log(data.user.token);
        session.token = data.user.token;
        session.userId = data.user.id;
      // token = data.user.token;
      // session.userId = data.user.id;
      // session.token = data.user.token;
      data.user.current_user = true;
      $('#loginMessage').html("Hello " + data.user.email);
      // api.getUser(cb.getUserCB);
      console.log("login response:", data);
      ux.afterLogin();
    }
  },

  logoutCB: function(err, data) {
    if (err) {
      console.error(err);
    } else {
      $('#logoutMessage').html("Goodbye!");
      console.log("success:");
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
