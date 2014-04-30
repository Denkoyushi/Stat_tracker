Statkeeper.Attempt = DS.Model.extend({
  scored: DS.attr('boolean'),
  players: DS.belongsTo('player', {async: true})
});

Statkeeper.Attempt.FIXTURES = [
 {
  id: 1,
  scored: true
 },
 {
  id: 2,
  scored: false
 }
];
