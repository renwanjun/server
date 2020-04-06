const presets = [
    ["@babel/preset-env", {
        "modules":false,
        "useBuiltIns": "usage",
        "corejs":"3",
        "targets":{
            "node":"current"
        }
    }]
]
const plugins= [
    // "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2
      }
    ]
  ]
module.exports = {
    presets,
    plugins
}