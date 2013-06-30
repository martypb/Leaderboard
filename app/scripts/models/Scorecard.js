LbApp.Scorecard = Ember.Model.extend({
	id : Ember.attr('number'),
	TeeId : Ember.attr('number'),
	UserName : Ember.attr('string') //,
	// DatePlayed : Ember.attr('date'),
	// Hole1Score : Ember.attr('number'),
	// Hole2Score : Ember.attr('number'),
	// Hole3Score : Ember.attr('number'),
	// Hole4Score : Ember.attr('number'),
	// Hole5Score : Ember.attr('number'),
	// Hole6Score : Ember.attr('number'),
	// Hole7Score : Ember.attr('number'),
	// Hole8Score : Ember.attr('number'),
	// Hole9Score : Ember.attr('number'),
	// Hole10Score : Ember.attr('number'),
	// Hole11Score : Ember.attr('number'),
	// Hole12Score : Ember.attr('number'),
	// Hole13Score : Ember.attr('number'),
	// Hole14Score : Ember.attr('number'),
	// Hole15Score : Ember.attr('number'),
	// Hole16Score : Ember.attr('number'),
	// Hole17Score : Ember.attr('number'),
	// Hole18Score : Ember.attr('number')
});

LbApp.Scorecard.adapter = LbApp.WAMAdapter.create({ table: LbApp.wamClient.getTable('Scorecard') });