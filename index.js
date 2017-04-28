/*!
 * gh-latest-release | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-latest-release
*/
'use strict';

const ghGet = require('gh-get');
const parseUserRepo = require('parse-user-repo');

module.exports = function ghLatestRelease(userRepo, options) {
  return new Promise(resolve => {
    parseUserRepo(userRepo);
    resolve();
  })
  .then(() => ghGet(`repos/${userRepo}/releases/latest`, Object.assign({
    userAgent: 'shinnn/ (https://github.com/shinnn/gh-latest-release)'
  }, options)))
  .then(response => response.body);
};
