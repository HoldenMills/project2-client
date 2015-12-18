// jshint browser:true, jquery:true
'use strict';

var api = {

url: 'http://localhost:3000',
// url: 'http://stormy-caverns-8878.herokuapp.com',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

 register: function register(credentials, callback) {
    this.ajax({
      method: 'POST',
      // url: ,
      url: this.url + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
   }, callback);
 },

 login: function login(credentials, callback) {
   this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  logout: function(callback) {
    var id = this.user.id;
    this.ajax({
     method: 'DELETE',
     url: this.url + '/logout/' + id,
     headers: {
       Authorization: 'Token token=' + token
     },
     contentType: 'application/json',
     dataType: 'json'
   }, callback);
 },

  // changeEmail: function(call)
  // this.ajax({
  //     method: 'PATCH',
  //     // url: 'http://httpbin.org/post',
  //     url: this.url + '/users',
  //     contentType: 'application/json; charset=utf-8',
  //     data: JSON.stringify(email_params),
  //     dataType: 'json'
  //   }, callback);
  // },

  newFutureTrip: function newFutureList(future_trip_params, callback) {
    this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.url + '/future_trips',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(future_trip_params),
      dataType: 'json',
      headers: {
        Authorization: "Token token=" + token
      }
    }, callback);
  },

  showFutureTrips: function(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/future_trips',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Authorization: "Token token=" + token
      }
    }, callback);
  },

  deleteFutureTrip: function(id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + "/future_trips/" + id,
      // contentType: 'application/json; charset=utf-8',
      // dataType: 'json',
      headers: {
        Authorization: "Token token=" + token
      }
    }, callback);
  }
};
