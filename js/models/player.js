Statkeeper.Player = DS.Model.extend({
  name: DS.attr(),
  team: DS.belongsTo('team', {async: true}),
  attempts: DS.hasMany('attempt', {async: true })
});


Statkeeper.Player.FIXTURES = [
  {
    id: 1,
    name: "Michael Jordan",
    attempts: [1,2]
  },
  {
    id: 2,
    name: "Orca Drone",
    attempts: [1,2]
  },
  {
    id: 3,
    name: "Grant Hill"
  },
  {
    id: 4,
    name: "Sharkman"
  },
  {
    id: 5,
    name: "Paul Pierce"
  }
];
