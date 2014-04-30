Statkeeper.Player = DS.Model.extend({
  name: DS.attr(),
  team: DS.hasMany('team', {async: true})
});


Statkeeper.Player.FIXTURES = [
  {
    id: 1,
    name: "Michael Jordan",
    teams: 1
  },
  {
    id: 2,
    name: "Orca Drone",
    teams: 2
  },
  {
    id: 3,
    name: "Grant Hill",
    teams: 1
  },
  {
    id: 4,
    name: "Sharkman",
    teams: 2
  },
  {
    id: 5,
    name: "Paul Pierce",
    teams: 1
  }
];
