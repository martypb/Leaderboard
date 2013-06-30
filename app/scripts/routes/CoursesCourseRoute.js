LbApp.CoursesCourseRoute = Ember.Route.extend({
  model: function(params) {
    return LbApp.Course.find(params.course_id);
  }
});