'use strict';
const lodash = require('lodash');
console.log('This is JavaScript.');

const s = 'Foo Bar';

// camel case: fooBar
// cigar case: foo-bar
console.log(lodash.camelCase(s));
