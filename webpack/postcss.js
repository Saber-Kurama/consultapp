import {  postcss } from '../config';
import path from 'path'

const {
    cssnext,
} = postcss;


export default (bundler) => [


  require('postcss-cssnext')(cssnext),
  // require('postcss-sassy-mixins')({
  //   mixinsFiles: path.join(__dirname, '../assets/styles/mixins/px.scss')
  // })
  // require('postcss-mixins')({
  //   mixinsFiles: path.join(__dirname, '../assets/styles/mixins/px.scss')
  // })
];
