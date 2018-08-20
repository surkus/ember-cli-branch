'use strict';
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'branch-cli-sdk',

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
