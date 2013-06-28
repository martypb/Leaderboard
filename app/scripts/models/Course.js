LbApp.Course = Ember.Model.extend({
	Name : Ember.attr('string'),
	City : Ember.attr('string')
});

LbApp.Course.adapter = LbApp.WAMAdapter.create({ table: LbApp.wamClient.getTable('Course') });

// LbApp.Course.FIXTURES = [
// 	{
// 		id: 1,
// 		Name: 'Pleasant Valley',
// 		City: 'Centreville'
// 	},
// 	{
// 		id: 2,
// 		Name: 'South Riding',
// 		City: 'South Riding'
// 	},
// 	{
// 		id: 3,
// 		Name: 'Brambleton',
// 		City: 'Ashburn'
// 	},
// 	{
// 		id: 4,
// 		Name: 'Bristow Manor',
// 		City: 'Bristow'
// 	}
// ];