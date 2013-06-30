// turn on logging
// window.App = Ember.Application.create({
//     LOG_TRANSITIONS: true,
//     LOG_BINDINGS: true
//   });

// view all registered routes
Ember.keys(App.Router.router.recognizer.names)

// view all registered templates
Ember.keys(App.Router.router.recognizer.names)

// get state history of an ember-data record
record.stateManager.get('currentPath')

// get the view object for a generated div by id
Ember.View.views['ember605']

// log state transitions
record.set("stateManager.enableLogging", true)


// view an instance of something from the container
App.__container__.lookup("controller:posts")
  App.__container__.lookup("route:application")


// view ember-data's identity map
App.__container__.lookup('store:main').recordCache # all records in memory
  App.__container__.lookup('store:main').recordCache[2].get('data.attributes') #attributes
  App.__container__.lookup('store:main').recordCache[2].get('comments') #loaded associations

// see all observers for an object, key
Ember.observersFor(comments, keyName);


// dealing with deprecations
Ember.observersFor(comments, keyName);

// handlebars
{{debugger}}
  {{log record}}


// implement an onerror hook to log all errors to server
Ember.onerror = function(error) {
    Em.$.ajax('/error-notification', 'POST', {
      stack: error.stack,
      otherInformation: 'exception message'
    });
  }

  
