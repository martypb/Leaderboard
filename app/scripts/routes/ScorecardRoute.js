LbApp.ScorecardRoute = Ember.Route.extend({
  model: function(params) {
    return LbApp.Scorecard.find(params.scorecard_id);
  }
});