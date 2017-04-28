# gh-latest-release

[![NPM version](https://img.shields.io/npm/v/gh-latest-release.svg)](https://www.npmjs.com/package/gh-latest-release)
[![Build Status](https://travis-ci.org/shinnn/gh-latest-release.svg?branch=master)](https://travis-ci.org/shinnn/gh-latest-release)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-latest-release.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-latest-release.svg)](https://david-dm.org/shinnn/gh-latest-release)
[![devDependency Status](https://david-dm.org/shinnn/gh-latest-release/dev-status.svg)](https://david-dm.org/shinnn/gh-latest-release#info=devDependencies)

A [Node](https://nodejs.org/) module to get the latest published full [release](https://help.github.com/articles/about-releases/) for the [Github](https://github.com/) repository.

```javascript
const ghLatestRelease = require('gh-latest-release');

ghLatestRelease('strongloop/fsevents').then(release => console.log(release));
```

```javascript
{
  url: 'https://api.github.com/repos/strongloop/fsevents/releases/5506311',
  assets_url: 'https://api.github.com/repos/strongloop/fsevents/releases/5506311/assets',
  upload_url: 'https://uploads.github.com/repos/strongloop/fsevents/releases/5506311/assets{?name,label}',
  html_url: 'https://github.com/strongloop/fsevents/releases/tag/v1.1.1',
  id: 5506311,
  tag_name: 'v1.1.1',
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
  created_at: '2017-02-20T05:14:55Z',
  published_at: '2017-02-20T05:35:02Z',
  assets: [],
  tarball_url: 'https://api.github.com/repos/strongloop/fsevents/tarball/v1.1.1',
  zipball_url: 'https://api.github.com/repos/strongloop/fsevents/zipball/v1.1.1',
  body: 'Back to specifying compatibility with darwin platform only because some use cases rely upon it.\n'
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
Return: `Promise<Object>`

It makes an [API](https://developer.github.com/v3/) request to [get the latest release information](https://developer.github.com/v3/repos/releases/#get-the-latest-release), and returns a [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise will be [*fulfilled*](https://promisesaplus.com/#point-26) with an [object](https://developer.github.com/v3/repos/releases/#response-2) if successful, otherwise [*rejected*](https://promisesaplus.com/#point-30) with an error.

## License

Copyright (c) 2016 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
