'use strict';
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-branch',

  options: {
    nodeAssets: {
      'branch-sdk': {
        srcDir: 'dist',
        import: {
          include: [
            'build.js'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  }
};
