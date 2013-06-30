/*global Ember */

// set up a global error handler to log to console
// Ember.onerror = function(error) {
//     console.log('error :');
//     console.log(error);
//     console.log('stack : ');
//     console.log(error.stack);
//   };

var LbApp = window.LbApp = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true
});

// Create the Windows Azure Mobile Services client 
LbApp.wamClient = new WindowsAzure.MobileServiceClient(
    "https://leaderboard.azure-mobile.net/",
    "KagiBlvirAJQlSPXAapzxJCgHLeFLL96"
);

/* Order and include as you please. */
require('scripts/wamAdapter');
require('scripts/models/*');
require('scripts/routes/*');
// require('scripts/controllers/*');

// require('scripts/views/*');

LbApp.Router.map(function () {
  // put your routes here
  this.resource('courses', function() {
    this.route('course', { path : ':course_id'});
  });
  this.route("leaderboard");
  this.route("scorecard");
});