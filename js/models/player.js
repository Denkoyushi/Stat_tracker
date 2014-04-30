Statkeeper.Player = DS.Model.extend({
  name: DS.attr(),
  team: DS.belongsTo('team', {async: true})
});


Statkeeper.Player.FIXTURES = [
  {
    id: 1,
    name: "Michael Jordan"
  },
  {
    id: 2,
    name: "Orca Drone"
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
