
var cb = {
  // callback: function callback(error, data) {
  //   if (error) {
  //     console.error(error);
  //     $('#result').val('status: ' + error.status + ', error: ' +error.error);
  //   return;
  //   }
  // }

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
      console.log("login response:", data);
    }
  },

  logoutCB: function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("success:", data);
    }
  },
};
