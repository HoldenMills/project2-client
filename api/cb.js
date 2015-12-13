'use strict';

// var guideTemplate = Handlebars.compile($('#guide-show').html());
var test;
var token;

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

  registerCB: function(err, data){
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
  //     // $('#loginMessage').html("Hello " + data.email);
  //     console.log(data);
  //   }
  // },

  loginCB: function(err, data){
    if (err) {
      console.error("error", err);
    } else {
      api.getParks(cb.getParksCB);
      token = data.user.token;
      // api.getUser(cb.getUserCB);
      console.log("login response:", data);
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
