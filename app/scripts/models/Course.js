LbApp.Course = Ember.Model.extend({
	id : Ember.attr('number'),
	Name : Ember.attr('string'),
	City : Ember.attr('string'),
	State : Ember.attr('string'),
	ZipCode : Ember.attr('string'),
	WebsiteUrl : Ember.attr('string')
});

LbApp.Course.adapter = LbApp.WAMAdapter.create({ table: LbApp.wamClient.getTable('Course') });
