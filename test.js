'use strong';

const ghLatestRelease = require('.');
const test = require('tape');

process.env.GITHUB_TOKEN = '';

test('ghLatestRelease()', t => {
  t.plan(6);

  t.strictEqual(ghLatestRelease.name, 'ghLatestRelease', 'should have a function name.');

  ghLatestRelease('purescript/purescript', {token: process.env.TOKEN_FOR_TEST}).then(release => {
    t.deepEqual(
      release.author.login,
      'paf31',
      'should get the latest release information of a given repository.'
    );
  }).catch(t.fail);

  ghLatestRelease(`shinnn/${'a'.repeat(99)}`, {token: process.env.TOKEN_FOR_TEST}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '404 Not Found',
      'should be rejected when the repository doesn\'t exist.'
    );
  }).catch(t.fail);

  ghLatestRelease('shinnn/sum-up', {token: process.env.TOKEN_FOR_TEST}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '404 Not Found',
      'should be rejected when the repository doesn\'t have any releases.'
    );
  }).catch(t.fail);

  ghLatestRelease('foo').then(t.fail, err => {
    t.strictEqual(
      err.message,
      'foo doesn\'t include `/`. The string must be in the form of "username/repo". e.g. isaacs/node-glob',
      'should be rejected when it takes an invalid string.'
    );
  }).catch(t.fail);

  ghLatestRelease(1).then(t.fail, err => {
    t.strictEqual(
      err.name,
      'TypeError',
      'should be rejected when the first argument is not a string.'
    );
  }).catch(t.fail);
});
