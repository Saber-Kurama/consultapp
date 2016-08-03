module.exports = function(source) {
  this.cacheable();
  return `@import 'mixins/index';
    ${source}`;
}
