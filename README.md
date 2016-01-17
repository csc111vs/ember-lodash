# ember-ramda


## Use

First you install this addon

```sh
# ember-cli > 0.2.3
ember install ember-ramda
# ember-cli <= 0.2.3
ember install:addon ember-ramda
```

And then in your ember.js app, you can import individual ramda modules freely

```js
import _ from 'ramda';

let truncatedString = _string.trunc(rawString);
```

Additionally, if you wish to work with the entire ramda library on a single namespace, you have the option of importing that as well
## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building
