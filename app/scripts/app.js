/*global Ember, DS */

var LbApp = window.LbApp = Ember.Application.create();

/* Order and include as you please. */
// require('scripts/routes/*');
// require('scripts/controllers/*');
require('scripts/models/*');
// require('scripts/views/*');

LbApp.Router.map(function () {
  // put your routes here
  this.route("courses");
  this.route("leaderboard");
  this.route("scorecard");
});

LbApp.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

LbApp.IndexRoute = Ember.Route.extend({
  model: function () {
    return ['red', 'yellow', 'blue', 'brown'];
  }
});

LbApp.CoursesRoute = Ember.Route.extend({
	model: function() {
		return LbApp.Course.find();
	}
});
