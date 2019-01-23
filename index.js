'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const resolve = require('resolve');

module.exports = {
  name: require('./package').name,

  included: function () {
    this._super.included.apply(this, arguments);
    this._ensureFindHost();

    let vendorPath = `vendor/${this.name}`;
    let host = this._findHost();

    host.import(path.join(vendorPath, 'build.js'));
  },

  treeForVendor() {
    let branchPath = path.join(this.resolvePackagePath('branch-sdk'), 'dist');

    let branchJs = fastbootTransform(new Funnel(branchPath, {
      files: ['build.js'],
      destDir: this.name
    }));

    return mergeTrees([branchJs]);
  },

  resolvePackagePath(packageName) {
    let host = this._findHost();
    return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: host.project.root }));
  },

  _ensureFindHost() {
    if (!this._findHost) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
    }
  }
};
