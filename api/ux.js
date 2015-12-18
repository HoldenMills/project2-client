'use strict';

var ux = {

  afterLogin: function() {
    $('#enter').hide(100);
    $('.loginMessage').show(500);
    $('#logoutButton').show(100);
  },

  afterRegister: function() {
    $('.registerMessage').show(200);
    $('#loginClass').hide(100);
  },

  afterLogout: function() {
    $('.logoutMessage').show(100);
  }

};

