// jshint browser:true, jquery:true
'use strict';

var api = {

// url: 'http://localhost:3000',
url: 'https://stormy-caverns-8878.herokuapp.com',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

 register: function register(registrationInfo, callback) {
    this.ajax({
      method: 'POST',
      // url: ,
      url: this.url + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(registrationInfo),
      dataType: 'json'
   }, callback);
 },

 login: function login(registrationInfo, callback) {
   this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(registrationInfo),
      dataType: 'json'
    }, callback);
  },

  getParks: function getParks(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/parks',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
    }, callback);
  },

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

  // newProfile: function newProfile(profile, callback) {
  //   this.ajax({
  //     method: 'POST',
  //     url: this.url + '/profile',
  //     contentType: 'application/json; charset=utf-8',
  //     data: JSON.stringify(profile),
  //     dataType: 'json'
  //   }, callback);
  //},

  // getProfile: function getProfile(callback) {
  //   this.ajax({
  //     method: 'GET',
  //     url: this.url + '/profiles',
  //     contentType: 'application/json',
  //     //dataType: 'json'
  //     // headers: {
  //     //   Authorization: "Token token=" + token
  //     // }
  //   }, callback);
  // },

};
