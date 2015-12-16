'use strict';

var test;
var token;
// var session = {
//   userId: null,
//   token: null,
// };


// var future_trips = {future_trips: [
//   park_id: future_trips.park_id,
//   reason: future_trips.reason,
//   date_begin: future_trips.date_begin,
//   date_end: future_trips.date_end
// ]};

  // futureTripsTemplate: Handlebars.compile($('#futureTrips').html()),
//   var context = {
//   items: [
//     {name: "Handlebars", emotion: "love"},
//     {name: "Mustache", emotion: "enjoy"},
//     {name: "Ember", emotion: "want to learn"}
//   ]
// };

// Handlebars.registerHelper('futureTrip', function() {
//   var emotion = Handlebars.escapeExpression(this.emotion),
//       name = Handlebars.escapeExpression(this.name);

//   return new Handlebars.SafeString(
//     "<button>I agree. I " + emotion + " " + name + "</button>"
//   );
// });
  // Handlebars.registerHelper($('list'), function(futureTrips, options) {
  // var out = "<ul>";

  // for(var i=0, l=futureTrips.length; i<l; i++) {
  //   out = out + "<li>" + options.fn(futureTrips[i]) + "</li>";
  // }

  // return out + "</ul>";
  // });

var cb = {

//   var theData = {future_trips}: park_id, date_end, date_begin, reason};
//   var allFutureTripsScript = $("#futureList").html();  
//     var allFutureTripsTemplate = Handlebars.compile (allFutureTripsScript);
// $(document.body).append (allFutureTripsTemplate (theData));

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
