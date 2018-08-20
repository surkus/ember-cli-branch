'use strict';

var path = require('path');
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-branch',

  included: function (app) {
    this._super.included.apply(this, arguments);
    var branchPath = path.join('node_modules', 'branch-sdk', 'dist', 'build.js');
    var importOptions = {
      using: [{
        transformation: 'fastbootTransform'
      }]
    };

    app.import(branchPath, importOptions);
  },

  importTransforms: function () {
    return {
      fastbootTransform: fastbootTransform
    }
  }
};
