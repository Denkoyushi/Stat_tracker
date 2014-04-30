Statkeeper.Router.map(function() {
  this.resource('teams', { path: '/'}, function() {
    this.resource('new_team')
    this.resource('shot_attempt')
  });
  this.resource('team', { path: '/team/:id' }, function(){
    this.resource('new_player')
  });
});

Statkeeper.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team', params.id);
  }
});

Statkeeper.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('player').set('model', this.store.find('player'))
  }
});

Statkeeper.PlayerRoute = Ember.ArrayController.extend({
  model: function() {
    return this.store.find('player')
  }
});

Statkeeper.NewTeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team')
  }
});

Statkeeper.NewPlayerRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('player')
  }
});

Statkeeper.TeamsRoute = Ember.Route.extend({
  model: function() {
   return this.store.find('team');
  }
});


Statkeeper.TeamsController = Ember.ArrayController.extend ({

});

Statkeeper.PlayerController = Ember.ArrayController.extend ({

});

Statkeeper.NewTeamController = Ember.ObjectController.extend ({
  actions: {
    createTeam: function() {
      var teams = this.store.find('team')
      var newName = this.get('newName')
      var newTeam = this.store.createRecord('team', {
        name: newName,
        defined: true
      });
      this.set('newName', '')

      this.transitionToRoute('/', teams);
    }
  }

});

Statkeeper.NewPlayerController = Ember.ObjectController.extend ({
  actions: {
    createPlayer: function() {
      var teams = this.store.find('player')
      var newName = this.get('newName')
      var newTeam = this.store.createRecord('player', {
        name: newName,
        defined: true
      });
      this.set('newName', '')

      this.transitionToRoute('/', teams);
    }
  }

});
