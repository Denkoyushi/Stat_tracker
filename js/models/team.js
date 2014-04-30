Statkeeper.Team = DS.Model.extend({
  name: DS.attr('string'),
  defined: DS.attr('boolean'),
  players: DS.hasMany('player', {async: true})
});

Statkeeper.Team.FIXTURES = [
  {
    id: 1,
    name: "Portland TrailBlazers",
    players: [1,2,3],
    defined: true
  },
  {
    id: 2,
    name: "Orca Drones",
    players: [4,5],
    defined: true
  }
];
