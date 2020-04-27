项目简介
---------------------------------------
开始时间：2020.03.28  
发起缘因：学习NodeJS开发前后端项目，实践《Node.js实战》中示例，该项目中实践内容包括打包编译工具的使用、使用express框架开发后端服务、ejs模版渲染页面、整合前端框架静态资源等内容。

### 技术栈：express+ejs+sqlite3


# Webpack4

# Babel7
## Babel是一个JavaScript编译器
Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

下面列出的是 Babel 能为你做的事情：

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
- 源码转换 (codemods)

## Usage Guide
Babel工具链提供一些工具帮助你更从容🉐️使用Babel无论你是一个终端使用者还是构建一个Babel的一部分。
这篇指南告诉你如何将你使用ES6语法的JavaScript应用代码编译成能够在现代浏览器中运行的代码。包含转换新的语法以及补充新特性。

### 设置流程：
1. 运行下面这段命令安装包
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env  
npm install --save @babel/polyfill
```
2. 在项目的根目录中新建一个配置文件`babel.config.json`:
```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
      }
    ]
  ]
}
```
> 上面的浏览器列表只是一个随意的例子。开发中根据实际需要支持的浏览器配置。

3. 运行这段命令编译代码，从目录`src`到`lib`
```
./node_modules/.bin/babel src --out-dir lib
```
> 可以用` npm babel `命令替换`./node_modules/.bin/babel`

## CLI的基础用法
自Babel7版本开始，所有开发者可能需要的Babel模块都被发布成@babel下独立的npm包。这种模块化的设计允许各种设计成指定用途的工具。

### Core Library
Babel的核心功能写在`@babel/core`模块中,在安装这个模块后
```
 npm install --save-dev @babel/core
```
你可以在你的JavaScript代码中直接引入并像下面这样使用：
```
const babel=require('@babel/core');
babel.transform("core",optionsObject);
```

### CLI Tool
@babel/cli工具让你可以在终端里使用babel.下面是安装命令和一个简单的使用例子：
```
npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel src --out-dir lib
```
因为目前还没有指定转换规则，所以输出的代码和输入的代码一样。我们可以通过传递参数指定转换规则。我们现在使用的最重要的参数就是*--plugins*和* --presets* 

### Plugins和Presets
> 箭头函数转换插件
@babel/plugin-transform-arrow-functions:
```
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```
> 一组预定义的插件 env
@babel/preset-env
```
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```
在没有任何配置时，this preset会包含所有插件以支持现代JavaScript.但是presets也可以设置选项。

## 配置Configuration

## Polyfill
>@babel/polyfill
 会加载整个polyfill库，针对编译的代码中的新的API进行处理，并且在代码中插入一些帮助函数。

>@babel/plugin-transform-runtime

1. 提高代码重用性，缩小编译后的代码提及
2. 防止污染全局作用域（corejs配置）



core-js/stable
regenerator-runtime/runtime

意味着你可以使用内置对象例如`Promise`或者`WeakMap`,静态方法像Array.from或Object.assign,实例方法类似Array.prototype.includes
# 框架
1. ### Connect 
Connect对Node的HTTP客户端和服务器模块做了简单的封装，其作者和贡献者们又做了一些官方支持的中间件组建，用以实现一些底层的功能。


### express
### ejs渲染模版
## 数据库
sqlite3


# 参考资料
[Babel官网](https://www.babeljs.cn/docs/usage)