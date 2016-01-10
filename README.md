# gh-latest-release

[![NPM version](https://img.shields.io/npm/v/gh-latest-release.svg)](https://www.npmjs.com/package/gh-latest-release)
[![Build Status](https://travis-ci.org/shinnn/gh-latest-release.svg?branch=master)](https://travis-ci.org/shinnn/gh-latest-release)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-latest-release.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-latest-release.svg)](https://david-dm.org/shinnn/gh-latest-release)
[![devDependency Status](https://david-dm.org/shinnn/gh-latest-release/dev-status.svg)](https://david-dm.org/shinnn/gh-latest-release#info=devDependencies)

A [Node](https://nodejs.org/) module to get the latest published full [release](https://help.github.com/articles/about-releases/) for the [Github](https://github.com/) repository.

```javascript
const ghLatestRelease = require('gh-latest-release');

ghLatestRelease('strongloop/fsevents', release => console.log(release));
```

```javascript
{
  url: 'https://api.github.com/repos/strongloop/fsevents/releases/2265953',
  assets_url: 'https://api.github.com/repos/strongloop/fsevents/releases/2265953/assets',
  upload_url: 'https://uploads.github.com/repos/strongloop/fsevents/releases/2265953/assets{?name,label}',
  html_url: 'https://github.com/strongloop/fsevents/releases/tag/v1.0.6',
  id: 2265953,
  tag_name: 'v1.0.6',
  target_commitish: 'master',
  name: '',
  draft: false,
  author: {
    login: 'es128',
    id: 1740641,
    avatar_url: 'https://avatars.githubusercontent.com/u/1740641?v=3',
    gravatar_id: '',
    url: 'https://api.github.com/users/es128',
    html_url: 'https://github.com/es128',
    followers_url: 'https://api.github.com/users/es128/followers',
    following_url: 'https://api.github.com/users/es128/following{/other_user}',
    gists_url: 'https://api.github.com/users/es128/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/es128/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/es128/subscriptions',
    organizations_url: 'https://api.github.com/users/es128/orgs',
    repos_url: 'https://api.github.com/users/es128/repos',
    events_url: 'https://api.github.com/users/es128/events{/privacy}',
    received_events_url: 'https://api.github.com/users/es128/received_events',
    type: 'User',
    site_admin: false
  },
  prerelease: false,
  created_at: '2015-12-10T14:01:28Z',
  published_at: '2015-12-10T14:04:19Z',
  assets: [],
  tarball_url: 'https://api.github.com/repos/strongloop/fsevents/tarball/v1.0.6',
  zipball_url: 'https://api.github.com/repos/strongloop/fsevents/zipball/v1.0.6',
  body: 'Updated node-pre-gyp to 0.6.17'
}
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-latest-release
```

## API

```javascript
const ghLatestRelease = require('gh-latest-release');
```

### ghLatestRelease(*ownerRepo* [, *options*])

*ownerRepo*: `String` (`/`-separated owner and repository names, for example <https://github.com/es128/ssl-utils> → `'es128/ssl-utils'`)  
*options*: `Object` ([gh-get](https://github.com/shinnn/gh-get#options) options)  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) instance

It makes an [API](https://developer.github.com/v3/) request to [get the latest release information](https://developer.github.com/v3/repos/releases/#get-the-latest-release), and returns a promise. The promise will be [*fulfilled*](https://promisesaplus.com/#point-26) with a [JSON object](https://developer.github.com/v3/repos/releases/#response-2) if successful, otherwise [*rejected*](https://promisesaplus.com/#point-30) with an error.

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
