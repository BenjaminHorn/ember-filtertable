import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberFiltertableENV.locationType
});

Router.map(function() {
  this.route('tree');
  this.route('flat', {path: '/'});
});

export default Router;
