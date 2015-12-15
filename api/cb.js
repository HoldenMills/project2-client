'use strict';

// var guideTemplate = Handlebars.compile($('#guide-show').html());
var test;
var token;
// var session = {
//   userId: null,
//   token: null,
// };
var cb = {

  allParksTemplate: function(){},

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

  // getUserCB: function(err, data){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // $('#loginMessage').html("Hello " + data.email);
  //     console.log(data);
  //   }
  // },

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

  // loginCB: function (error, data) {
  //   if (error) {
  //     console.error(error);
  //     $(".user-messages").html("<strong>Error! Login fail!</strong>");
  //     return;
  //   }

  //   $('.user-messages').text('Welcome, user #' + session.userId);

  // // show in console for testing purposes
  // console.log(session.userId);
  // console.log(session.token);

  // // display current_user status

  // },


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
      var myHTML = allParksTemplate({park: data.parks});
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

 mainSearchCB: function(err, data){
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      var rowHTML = cb.allProdsTemplate({products: data});
      $("#allProdsPage").html(rowHTML);
    }
  },
};
