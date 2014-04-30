Statkeeper.Router.map(function() {
  this.resource('teams', { path: '/'}, function() {
    this.resource('new_team')
  });
  this.resource('team', { path: '/team/:id' }, function(){
    this.resource('new_player', { path: '/new_player' })
  });
  this.resource('player', { path: '/player/:id'});
});

Statkeeper.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team', params.id);
  }
});


Statkeeper.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('player', params.id);
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


Statkeeper.PlayerController = Ember.ObjectController.extend ({
  actions: {
    swishShot: function(player) {
      var player = player;
      console.log(player)
      NewSwishShot = this.store.createRecord('attempt', {
        scored: true
      });
      player.get("attempts").pushObject(NewSwishShot)

    },
    missShot: function(player) {
      var player = player;
      console.log(player)
      NewMissShot = this.store.createRecord('attempt', {
        scored: false
      });
      player.get("attempts").pushObject(NewMissShot)
    }
  }
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
  needs: "team",
  team: Ember.computed.alias("controllers.team"),

  actions: {
    createPlayer: function() {
      var team = this.get('team').get('model');
      var newName = this.get('newName')
      var newPlayer = this.store.createRecord('player', {
        name: newName
      });
       team.get('players').pushObject(newPlayer)

      this.set('newName', '')
      this.transitionToRoute('team', team)

    }
  }

});
