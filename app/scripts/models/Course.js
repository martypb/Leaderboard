LbApp.Course = DS.Model.extend({
	Name : DS.attr('string'),
	City : DS.attr('string')
});

LbApp.Course.FIXTURES = [
	{
		id: 1,
		Name: 'Pleasant Valley',
		City: 'Centreville'
	},
	{
		id: 2,
		Name: 'South Riding',
		City: 'South Riding'
	},
	{
		id: 3,
		Name: 'Brambleton',
		City: 'Ashburn'
	}
];