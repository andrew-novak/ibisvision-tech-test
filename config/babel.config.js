module.exports = api => {
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["@babel/transform-runtime"];

  return {
    presets,
    plugins
  };
};
