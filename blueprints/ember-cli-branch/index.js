'use strict';

module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    return this.addPackagesToProject([
      { name: 'branch-sdk', target: '^2.42.0' }
    ]);
  }
};
