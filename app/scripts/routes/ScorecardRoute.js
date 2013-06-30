LbApp.ScorecardRoute = Ember.Route.extend({
	model : function() {
		return LbApp.Scorecard.find(1);
	}
});