安装react
npm install -g create-react-app
create-react-app myapp  
cd myapp 
npm start

webpack相关的配置文件:npm run eject

在package.json中添加字段proxy，开发环境下dev-server将会自动转发请求："proxy": "http://aaa.bbb.com"

安装ant-mobile
npm install antd-mobile --save
按需加载：使用 babel-plugin-import（推荐）
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
  ]
}

安装redux
npm i redux --save
npm i react-redux --save
redux 异步：npm i redux-thunk --save
redux  @connect修饰器
安装：babel-plugin-transform-decorators-legacy
配置："transform-decorators-legacy"

安装react-router4
npm i react-router-dom --save

安装axios
npm i axios --save

浏览器cookies
browser-cookies

express插件
express
body-parser
cookie-parser

mongoose数据库
mongoose

类型检测
prop-types

md5加密
utility