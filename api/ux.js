'use strict';

var ux = {

  afterLogin: function() {
    $('.enter').hide(900);
    $('#park_list').show(800);
    $('#my_profile').show(800);
    $('#newFuture').show(800);
  },

  viewFuture: function() {
    $('#futureList').show(600);
  }
};
// $('#future').on('click', function(){
//   $('#park_list').show(500);
//   $('#my_profile').hide(400);
// });
