'use strict';

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

    this.allParksTemplate = Handlebars.compile($('#allParks-index').html());
  },

  registerCB: function(err, data){
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  },

  getUserCB: function(err, data){
    if (err) {
      console.log(err);
    } else {
      $('#loginMessage').html("Hello " + data.title);
      console.log('Hello');
      console.log(data.title);
    }
  },

  loginCB: function(err, data){
    if (err) {
      console.error("error", err);
    } else {
      token = data.user.token;
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

  // getFutureTripsCB: function(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data);
  //   }
  // },

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
