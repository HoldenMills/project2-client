'use strict';

var test;
var token;
var session = {
  userId: null,
  token: null,
};

var cb = {

  // allParksTemplate: Handlebars.compile($('#allParks').html()),

  // allFutureTripsTemplate: Handlebars.compile($('#allFutureTrips').html()),

  // init: function(){
  //   Handlebars.registerHelper('ifOnLoan', function (conditionalVariable, options){
  //     if (conditionalVariable === options.hash.value) {
  //       return options.fn(this);
  //     } else {
  //       return options.inverse(this);
  //     }
  //   });
  // },

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
      // api.getProfile(cb.getProfileCB);
      token = data.user.token;
      // session.userId = data.user.id;
      // session.token = data.user.token;
      data.user.current_user = true;
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


//   var items = [];

//    $.each(data, function(i, item) {

//           items.push('<li><a href="yourlink?id=' + item.UserID + '">' + item.Username + '</a></li>');

//    });  // close each()

//    $('#yourUl').append( items.join('') );

// var $movieList = $('#movies');


//   var moviesURL = 'http://localhost:3000/movies';
//   $('#movies_button').on('click', function(event){
//     event.preventDefault();

//     var moviesResponseHandler  = function(moviesData){
//       console.log('moviesData is ' + moviesData);
//       var  movies = JSON.parse(moviesData);
//       console.log('movies are ' + movies);
//       movies.forEach(function(movie){
//         $movieList.append('<li>' + movie.name + '</li>');
//       });
//     };
//     requestPromise.done(moviesResponseHandler);
//     requestPromise.fail(function(){
//       console.error('Error: Ajax request for ' + moviesURL);
//     }); // end of requestPromise.fails

};
