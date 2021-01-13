module.exports = function(config){
  config.addPassthroughCopy('11ty/_static');
  return {
    dir: {
      input: "11ty",
    }
  }
};