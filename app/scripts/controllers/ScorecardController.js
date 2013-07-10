LbApp.ScorecardController = Ember.ObjectController.extend({
	Front9Score : function() {
		return this.get('model.Hole1Score') + this.get('model.Hole2Score') + this.get('model.Hole3Score') + this.get('model.Hole4Score') + this.get('model.Hole5Score') + this.get('model.Hole6Score') + this.get('model.Hole7Score') + this.get('model.Hole8Score') + this.get('model.Hole9Score');
	}.property('model.Hole1Score').property('model.Hole2Score').property('model.Hole3Score').property('model.Hole4Score').property('model.Hole5Score').property('model.Hole6Score').property('model.Hole7Score').property('model.Hole8Score').property('model.Hole9Score'),
	Back9Score : function() {
		return this.get('model.Hole10Score') + this.get('model.Hole11Score') + this.get('model.Hole12Score') + this.get('model.Hole13Score') + this.get('model.Hole14Score') + this.get('model.Hole15Score') + this.get('model.Hole16Score') + this.get('model.Hole17Score') + this.get('model.Hole18Score');
	}.property('model.Hole10Score').property('model.Hole11Score').property('model.Hole12Score').property('model.Hole13Score').property('model.Hole14Score').property('model.Hole15Score').property('model.Hole16Score').property('model.Hole17Score').property('model.Hole18Score'),
	TotalScore : function() {
		return this.get('Front9Score') + this.get('Back9Score');
	}.property('Front9Score').property('Back9Score')
});