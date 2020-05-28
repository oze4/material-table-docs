const {getOptions} = require('loader-utils');
const {readFile} = require('fs-extra');
const mdx = require('@mdx-js/mdx');
const emoji = require('remark-emoji');
const matter = require('gray-matter');
const stringifyObject = require('stringify-object');
const slug = require('./remark/slug');