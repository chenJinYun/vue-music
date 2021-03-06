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

### jsonp 原理以及使用       
     0. 实现例子：https://github.com/webmodules/jsonp/blob/master/index.js                                        
     1.解决跨域：script标签默认可以跨域，

     2.使用jsonp插件，实现jsonp封装请求数据

     3.之所以使用jsonp实现跨域的问题，是因为全部都是请求数据，没有对数据的增删改操作

     4.jsonp发送的全部都是get请求，请求参数全部拼接在url后面

     5.需要拼接url参数

### 实现轮播图组件
      1.加载的时机：要等到数据回来的时候才加载，解决:v-if

### 抽取scroll组件：better-scroll
      1.scrollToElement，滚动到相应的元素

### 图片懒加载: vue-lazyload
      1.引入插件，注册在vue实例上
      2.img的src替换成v-lazy

### 插件冲突问题：
      1.fastClick和better-scroll冲突，在需要点击的图片加上needsclick class 即可解决：因为fastclick会识别这个属性并且不阻止点击

### loading组件


### 歌手页面
      1.封装singer类，面向对象的思想，直接new出来，不重复写代码
      2、组装自己需要的数据结构
      3.list-view组件，实现联动以及字母排序
      4.设置/获取attribute的方法 getData
      5.使用touchstart事件，实现左右两边的联动
      6.touchmove事件，实现
      7.左右联动，需要实时知道滚动的位置，并且要知道滚动的位置对应的那个字母的位置

###  知识点
      1.|0 是或0 可以用作向上取整
      2.this.$refs.[component名字].$el.style ，如果是vue组件，则需要用$el才能操作dom
      3.arr.slice()实现数组的深复制
      4.@click.stop阻止事件冒泡

### import * as getters 引入全部的export 直接用getters.属性名 获取

### 歌手详情页
      1.二级的vue-router
      2.添加路由动画，使用transition

### vuex
      1.状态管理
      2.使用场景：多个组件的状态共享、路由之间的复杂数据传递
      3.语法糖：
            mapGetters：get state
            mapMutations:set state
### 路由：
      1.this.$router.back();  返回上一级
      2.this.$router.push({path:''}) 路由跳转


### dom工具类
      1.获取元素
      2.获取属性值或者设置属性值
      3.获取供应商，即:什么浏览器内核，做兼容

### util工具类
      1.arr.slice()实现数组的深复制
      2.shuffle方法，实现数组的打乱

### 播放器
      1.VUEX 数据设计
      2.添加动画， 动画钩子
      3.播放功能 audio -> play() 暂停：pause()
      4.获取歌曲时间 使用audio的timeupdate事件，获取当前播放的时间
      5.格式化时间函数format,以及补零

### 进度条组件
      1.可以根据当前播放时间以及歌曲总时长计算出比例
      2.touch事件实现进度条的操作

### 圆形进度条组件
      1.svg的使用：

### 播放模式的切换
      
### 歌曲歌词 
      1.js-base64 解码base64
      2.lyric-parser 歌词渲染

### 多个组件相同处理 mixins
      0.定义使用与vue组件一致，也有mounted等钩子以及method等属性
      1.相当于是，一份代码放在一个地方那个管理，需要使用跟这个代码的组件，引入mixin，就相当于在组件中加入了这段代码
      2.组件定义同名的函数，会覆盖mixin中的同名函数，如果组件没有定义同名函数，会使用mixin中定义的函数
            2.1 mixin中的函数可以定义为默认行为，也就是组件没有定义同名函数，则默认使用mixin函数的行为
            2.2如果没有默认行为，则抛一个异常，告知外层组件需要定义一个与mixin同名函数
      3.组件使用mixin方式：

            mixins: [名字]，可以传入多个

            相当于与组件的代码做了一个merger行为，组件同名方法会覆盖mixin中的同名方法
            

### 歌单详情页
      1.vuex保存disc


### 排行榜页

### 搜索页面
      1.搜索框没有关键词，有热门搜索词
      2.上拉加载效果

      调用子组件的方法:通过ref引用，调用子组件的方法



### confirm 弹出框组件

### playList组件




###  song text
      1.http://117.21.183.19/amobile.music.tc.qq.com/C400002E3MtF0IAMMY.m4a?guid=1073188134&vkey=5799B068DF7EB3BC1FD954A9136163121AEBE4D740F2BEE47C91A32998C0F70ADB7C710EAF737BFA6354A3293ACB9EE5714549C24B41958A&uin=0&fromtag=66
      

    
