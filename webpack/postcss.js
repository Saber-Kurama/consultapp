import {  postcss } from '../config';

const {
    cssnext,
} = postcss;


export default (bundler) => [
  require('postcss-cssnext')(cssnext)
];
