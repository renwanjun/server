const path = require('path')

let env = process.env.NODE_ENV || 'production'
// 如果本地环境设置了 NODE_ENV , 则会使用本地环境中的 NODE_ENV , 如果没有则使用 production
env = env.toLowerCase()

// 根据环境变量的不同引入不用的文件，来确定是开发环境还是生产环境
var file = path.resolve(__dirname, env)
console.log('hhhhh')
try {
  module.exports = require(file)
} catch (err) {
  console.log(err)
  throw err
}