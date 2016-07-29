module.exports = {
  // locals: function(options) {
    // // Return custom template variables here.
    // return {};
  // },

  fileMapTokens: function(options) {
    // Return custom tokens to be replaced in your files
    console.log(options);
    return {
      __token__: function(options){
        // logic to determine value goes here
        return 'value'
      },
      __parent__: function(options){
        var parent = ''
        if(options.entity.options.parent){
          parent = options.entity.options.parent
        }
        return parent
      }
    }
  },

  // Should probably never need to be overriden
  //
  // filesPath: function() {
  //   console.log(this.path)
  //   return path.join(this.path, 'files');
  // },
  // console.log(this.path);
  // beforeInstall: function(options) {},
  // afterInstall: function(options) {},
};
