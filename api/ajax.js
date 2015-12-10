'use strict'

var api = {

url: 'http://www.localhost:3000',

// url: 'http://httpbin.org/post',

  // ajax: function(config, cb) {
  //   $.ajaxSetup({
  //     xhrFields: {
  //       withCredentials: true
  //     }
  //   });
  // },

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

  getFutureTrips: function getFutureTrip(callback) {
    this.ajax({
      method: 'GET',
      // url: 'http://httpbin.org/post',
      url: this.url + '/future_trips',
      // contentType: 'application/json; charset=utf-8',
      // data: JSON.stringify(callback),
      dataType: 'json',
      headers: {
        Authorization: "Token token=" + token
      }
    }, callback);
  },

  newFutureList: function newFutureList(future_trip_params, callback) {
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
  }
};


