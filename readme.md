一个完整、普适但不臃肿的 React Native 脚手架，具有下述特点：

* React Navigation 路由导航（可以自定义单个页面进入动画）；
* 集成 Redux 进行状态管理，并实现本地持久化存储；
* 使用 Fetch API 进行网络请求；
* 自定义组件；
* 自定义启动页、App 名称、appID 等；
* 内嵌 H5 页面（WebView）；
* 网络检测（是否连接网络）；
* 可构建离线安装包。

## 目录介绍

.  
|-- android  
|-- ios  
|-- src  
| |-- assets  
| |-- components  
| | |-- XgToast.js  
| |  
| |-- config  
| | |-- pxToDp.js  
| | |-- pxToDp.js  
| | |-- pxToDp.js  
| |  
| |-- redux  
| |-- screens  
| | |-- ScreenHome  
| | |-- ScreenWebView  
| | |-- 其他页面文件  
|  
|-- App.js  
|-- app.json  
|-- index.js

* `android/` android 原生代码（使用 android studio 要打开这个目录，如果直接打开父目录报错）
* `ios/` ios 原生代码（使用 xcode 打开这个目录，如果直接打开父目录报错）

* `src/` 放置所有原始的 react native 代码
* `src/assets/` 图片、样式文件

* `src/components/` 自定义组件目录
* `src/components/XgToast.js` 这个是自定义 Toast 组件

* `src/config/` 配置文件目录，比如路由配置
* `src/config/pxToDp.js` 单位自适应文件
* `src/config/route.js` 路由文件
* `src/config/xgHttp.js` 网络请求文件
* `src/config/xgRequest.js` 具体网络请求 API 列表

* `src/redux/` redux 状态管理目录

* `src/screens/` 所有页面文件
* `src/ScreenHome/` 这个目录是放具体页面文件的，为了进一步关注代码分离，里面又分为三个文件：`index.js` 中包含逻辑部分，`style.js` 中包含样式部分；`view.js` 中包含视图或者说页面元素部分。其他页面文件结构与此相同。
* `src/ScreenWebView/` 内嵌 H5

* `App.js` 可以理解为 react native（js 部分） 代码部分的入口文件，比如整个项目的路由在这里导入
* `app.json` 项目说明，主要给原生 app 打包用，包括项目名称和手机桌面展示名称 [React Native : 0.41 app.json](https://stackoverflow.com/questions/42409459/react-native-0-41-app-json)
* `index.js` 打包 app 时进入 react native（js 部分） 的入口文件（0.49 以后安卓、ios 共用一个入口文件）

## 了解更多

关于该项目更为具体的介绍可查看这两篇文章，详细介绍了开发过程：

[开发 React Native APP —— 从改造官方 Demo 开始（一）](https://xiaogliu.github.io/2018/02/27/develop-react-native-app-1/)  
[开发 React Native APP —— 从改造官方 Demo 开始（二）](https://xiaogliu.github.io/2018/02/27/develop-react-native-app-2/)

部分页面展示如下：

<img src="http://ol9ge41ud.bkt.clouddn.com/tab_navigator.gif" width = "240" height = "427" alt="图片名称" align=center />
<img src="http://ol9ge41ud.bkt.clouddn.com/nav_diff_entry.gif" width = "240" height = "427" alt="图片名称" align=center />
<img src="http://ol9ge41ud.bkt.clouddn.com/network.gif" width = "240" height = "427" alt="图片名称" align=center />
<img src="http://ol9ge41ud.bkt.clouddn.com/persist_redux.gif" width = "240" height = "427" alt="图片名称" align=center />
<img src="http://ol9ge41ud.bkt.clouddn.com/launch_image.gif" width = "480" height = "407" alt="图片名称" align=center />
