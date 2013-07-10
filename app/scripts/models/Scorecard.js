LbApp.Scorecard = Ember.Model.extend({
	id : Ember.attr(),
	TeeId : Ember.attr(),
	UserName : Ember.attr(),
	DatePlayed : Ember.attr(),
	Hole1Score : Ember.attr(),
	Hole2Score : Ember.attr(),
	Hole3Score : Ember.attr(),
	Hole4Score : Ember.attr(),
	Hole5Score : Ember.attr(),
	Hole6Score : Ember.attr(),
	Hole7Score : Ember.attr(),
	Hole8Score : Ember.attr(),
	Hole9Score : Ember.attr(),
	Hole10Score : Ember.attr(),
	Hole11Score : Ember.attr(),
	Hole12Score : Ember.attr(),
	Hole13Score : Ember.attr(),
	Hole14Score : Ember.attr(),
	Hole15Score : Ember.attr(),
	Hole16Score : Ember.attr(),
	Hole17Score : Ember.attr(),
	Hole18Score : Ember.attr()
});

LbApp.Scorecard.adapter = LbApp.WAMAdapter.create({ table: LbApp.wamClient.getTable('Scorecard') });