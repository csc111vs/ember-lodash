import _ from 'ramda/ramda';

module('Unit | Utility ');

test('ramda as a single module has been exported', function(assert) {
  assert.ok(_, 'ramda is exported');
});
