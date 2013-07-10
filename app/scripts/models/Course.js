LbApp.Course = Ember.Model.extend({
	id : Ember.attr(),
	Name : Ember.attr(),
	City : Ember.attr(),
	State : Ember.attr(),
	ZipCode : Ember.attr(),
	WebsiteUrl : Ember.attr()
});

LbApp.Course.adapter = LbApp.WAMAdapter.create({ table: LbApp.wamClient.getTable('Course') });
