一个完整、普适但不臃肿的 React Native 脚手架，具有下述特点：

* React Navigation 路由导航（可以自定义单个页面进入动画）；
* 集成 Redux 进行状态管理，并实现本地持久化存储；
* 使用 Fetch API 进行网络请求；
* 自定义组件；
* 自定义启动页、App 名称、appID 等；
* 内嵌 H5 页面（WebView）；
* 网络检测（是否连接网络）；
* 可构建离线安装包。

[点击这里查看 Demo 展示](https://user-gold-cdn.xitu.io/2018/2/28/161d877eb7987d89?imageslim)

> update 2018-04-25：由于现在 RN 及其相关插件更新频繁，如果出于学习的目的，安装依赖时最好按照 `package.json` 中指定的 package 版本进行安装，熟悉 RN 开发流程后再升级版本。

## 开发环境及工具

* 基于 RN 0.49；
* macOS High Sierra 10.13.3；Xcode 9.2；Android Studio 3.0.1；
* 安卓（4.3 及以上）/ iOS（8 及以上） 已测试。

> 没有在 windows 下运行，但 RN 本身与操作系统无关，配置好环境可以开发安卓应用。

## 本地运行

1.  下载本项目，并安装依赖包；
2.  安装 React Native CLI 及安卓/iOS 开发环境（可参考 RN 官网介绍 [Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html)）

3.  进入项目根目录，执行下面命令：

```bash
react-native run-ios # ios
react-native run-android # 安卓
```

> 也可通过 Xcode 打开 ios 目录下的 “项目目录” 后点 `运行` 或者 Android Studio 打开 `android` 目录后点 `运行` 启动项目。

NOTE：开发中遇到问题可参考开发这个项目过程中的 [开发记录](https://github.com/xiaogliu/step_by_step/tree/master/04_JS_Framework/1_react/react_native)

## 目录介绍

**目录结构如下：**

.  
 |-- android &nbsp;  
 |-- ios &nbsp;  
 |-- src &nbsp;  
 | &nbsp;&nbsp;&nbsp; |-- assets  
 | &nbsp;&nbsp;&nbsp; |-- components  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- XgToast.js  
 | &nbsp;&nbsp;&nbsp; |  
 | &nbsp;&nbsp;&nbsp; |-- config  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- pxToDp.js  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- route.js.js  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- xgHttp.js  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- xgRequest.js  
 | &nbsp;&nbsp;&nbsp; |  
 | &nbsp;&nbsp;&nbsp; |-- redux  
 | &nbsp;&nbsp;&nbsp; |-- screens  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- ScreenHome  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- index.js  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- style.js  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- view.js  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- ScreenWebView  
 | &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; |-- 其他页面文件  
 |  
 |-- App.js  
 |-- app.json  
 |-- index.js

**目录说明如下：**

> `android/` &nbsp; # android 原生代码（使用 android studio 要打开这个目录，如果直接打开父目录报错）  
> `ios/` &nbsp; # ios 原生代码（使用 xcode 打开这个目录下的项目目录）

> `src/` &nbsp; # 放置所有原始的 react native 代码  
> `src/assets/` &nbsp; # 图片、样式文件

> `src/components/` &nbsp; # 自定义组件目录  
> `src/components/XgToast.js` &nbsp; # 这个是自定义 Toast 组件

> `src/config/` &nbsp; # 配置文件目录，比如路由配置  
> `src/config/pxToDp.js` &nbsp; # 单位自适应文件  
> `src/config/route.js` &nbsp; # 路由文件  
> `src/config/xgHttp.js` &nbsp; # 网络请求文件  
> `src/config/xgRequest.js` &nbsp; # 具体网络请求 API 列表

> `src/redux/` &nbsp; # redux 状态管理目录

> `src/screens/` &nbsp; # 所有页面文件  
> `src/ScreenHome/` &nbsp; # 这个目录是放具体页面文件的，为了进一步关注代码分离，里面又分为三个文件：`index.js` &nbsp; # 中包含逻辑部分，`style.js` 中包含样式部分；`view.js` 中包含视图或者说页面元素部分。其他页面文件结构与此相同。  
> `src/ScreenWebView/` &nbsp; # 内嵌 H5

> `App.js` &nbsp; # 可以理解为 react native（js 部分） 代码部分的入口文件，比如整个项目的路由在这里导入  
> `app.json` &nbsp; # 项目说明，主要给原生 app 打包用，包括项目名称和手机桌面展示名称 [React Native : 0.41 app.json](https://stackoverflow.com/questions/42409459/react-native-0-41-app-json)  
> `index.js` &nbsp; # 打包 app 时进入 react native（js 部分） 的入口文件（0.49 以后安卓、ios 共用一个入口文件）

## Q & A

有同学在使用这个仓库的时候发现了问题并提了 issue，部分汇总如下，便于查看问题：

1.  windows 平台开发安卓应用 `tabBarIcon` 未正确渲染 [#1](https://github.com/xiaogliu/react_native_complete_demo/issues/1)    
2.  构建安卓应用时无法下载 gradle [#3](https://github.com/xiaogliu/react_native_complete_demo/issues/3)

## 其他

关于该项目更为具体的介绍可查看这两篇文章，详细介绍了开发过程：

[开发 React Native APP —— 从改造官方 Demo 开始（一）](https://juejin.im/post/5a9602745188257a5c609b2f)  
[开发 React Native APP —— 从改造官方 Demo 开始（二）](https://juejin.im/post/5a9602c45188257a7262e3fb)
