/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ramda',

  treeForAddon: function(tree) {
    var ramdaPath = path.dirname(require.resolve('ramda/ramda.js'));
    var ramdaTree = this.treeGenerator(ramdaPath);

    var trees = mergeTrees([ramdaTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
