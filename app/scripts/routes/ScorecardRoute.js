LbApp.ScorecardRoute = Ember.Route.extend({
  model: function() {
    var mdl = LbApp.Scorecard.find(1);

    return mdl;
  }
});