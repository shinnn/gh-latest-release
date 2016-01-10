/*!
 * gh-latest-release | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-latest-release
*/
'use strict';

const ghGet = require('gh-get');
const parseUserRepo = require('parse-user-repo');

module.exports = function ghLatestRelease(userRepo, options) {
  options = options || {};

  options.headers = Object.assign({
    'user-agent': 'https://github.com/shinnn/gh-latest-release'
  }, options.headers);

  return new Promise(resolve => {
    parseUserRepo(userRepo);
    resolve();
  })
  .then(() => ghGet(`repos/${userRepo}/releases/latest`, options))
  .then(response => response.body);
};
