// ember-model-based adapter that connects to Windows Azure Mobile Services
LbApp.WAMAdapter = Ember.Object.extend({
  table: null,
  init: function() {
    this.table = this.get('table');
  },

  find: function(record, id) {
    var query = this.table.where({ id: id });
    return query.read().then(function(data) {
      Ember.run(record, record.load, data);
    });
  },

  findAll: function(klass, records) {
    return this.table.read().then(function(data) {
      Ember.run(records, records.load, klass, data);
    });
  },

  findQuery: function(klass, records, params) {
    var query = this.table.where(params);
    return query.read().then(function(data) {
      Ember.run(records, records.load, klass, data);
    });
  },

  createRecord: function(record) {
    return this.table.insert(record.toJSON()).then(function(data) {
      Ember.run(function() {
        record.load(data.id, data);
        record.didCreateRecord();
      });
    });
  }
});