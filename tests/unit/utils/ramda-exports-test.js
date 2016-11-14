import _ from 'ramda/ramda';
import { module, test } from 'ember-qunit';

module('Unit | Utility ');

test('ramda as a single module has been exported', function(assert) {
  assert.ok(_, 'ramda is exported');
});
