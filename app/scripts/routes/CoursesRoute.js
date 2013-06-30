LbApp.CoursesRoute = Ember.Route.extend({
	model: function() {
		return LbApp.Course.findAll();
	}
});