'use strict';

var ux = {

  afterLogin: function() {
    $('.loginMessage').show(100);
  },

  afterRegister: function() {
    $('.registerMessage').show(100);
  },

  afterLogout: function() {
    $('.logoutMessage').show(100);
  }

};

