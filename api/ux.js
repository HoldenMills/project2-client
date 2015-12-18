'use strict';

var ux = {

  afterLogin: function() {
    $('#register').hide(100);
    $('.loginMessage').show(500);
  },

  afterRegister: function() {
    $('.registerMessage').show(200);
    $('#login').hide(100);
  },

  afterLogout: function() {
    $('.logoutMessage').show(100);
  }

};

