Statkeeper.Team = DS.Model.extend({
  name: DS.attr('string'),
  defined: DS.attr('boolean'),
  players: DS.belongsTo('player', {async: true})
});

Statkeeper.Team.FIXTURES = [
  {
    id: 1,
    name: "Portland TrailBlazers",
    defined: true
  },
  {
    id: 2,
    name: "Orca Drones",
    defined: true
  }
];
