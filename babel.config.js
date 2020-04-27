const presets = [
    ["@babel/preset-env", {
        "modules":false,
        "useBuiltIns": "usage", // 启用这一项，会参考目标浏览器和代码中所使用的特性来按需加入polyfill 
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