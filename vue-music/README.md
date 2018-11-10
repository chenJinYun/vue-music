# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```



### 项目技术
    1.mvvm架构
    2.webpack管理
    3.vue全家桶
    4.vue-route管理理由
    5.路由懒加载
    6.vuex状态管理
    7.

### 需求

### 初始化
    vue init webpack name
    npm run dev
    npm run build
    修改vue-cli初始化的内容，项目结构按照自己的需要

### wepback
    1.alias配置的是别名，比如说：需要配置文件的相对路径，可以在这里配置一个别名，在文件中引用的时候只需要使用别名
    e.g:  
    alias: {
      '@': resolve('src'),
      'common': resolve('src/common'),
      'components': resolve('src/components'),
      'base': resolve('src/base'),
      'api': resolve('src/api')
    }
    在使用components路径时可以直接使用别名

### eslint配置
    1.可以配置自己的规则

### 路由
    0. 先注册路由，vue.use(router)
    1. 设置跟路径，跳转的路由 ：redirect
    2. 配置路由;path/component ,指定路径和对应渲染的组件
    3. router-view:露哟哟的站位
    4. route-link:路由链接，
      4.1 默认是解析成<a>,可以使用tag属性解析的标签
      4.2 to:链接地址
      4.3 当前链接高亮属性：.router-link-active

    
