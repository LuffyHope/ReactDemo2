# ReactDemo2
本篇文章只讲了浅显的用法，没有讲其原理。如果觉得有什么缺陷欢迎下面留言。</br>
Android原生调用reactNative页面</br>
首先我们来看下效果图</br>
![Alt](https://github.com/LuffyHope/ReactDemo2/blob/master/android/go_to_baidu.gif)
## 一·理解：
可以联想Android加载H5页面需要用到Webview这个控件加载，相同的Android加载ReactNative页面需要用到ReactRootView控件。只不过ReactNative需要配置的项要多一些。
## 二·我们怎样去调用react页面？代码中需要配置哪些参数？
为方便理解我先举个例子：我们知道**深圳**有**注册**一家名为**百度**的**公司**。如果我们要去**百度**，那么首先我们得知道**深圳**在哪。到了**深圳**我们才能去**百度**这家**公司**。这里我们把深圳（**shenzhen**）比作需要加载得ReactNative模块.js文件，把百度（**baidu**）看作是我们需要加载的ReactNative得模块名。如下图↓
- 在ReactNative中的配置
![Alt](https://github.com/LuffyHope/ReactDemo2/blob/master/android/reactnative.jpg)
- 在Android的配置   这就是android高铁站 我们需要从这里出发去百度总部
![Alt](https://github.com/LuffyHope/ReactDemo2/blob/master/android/android.jpg)
> 我们需要注意的是在Android端```setJSMainModulePath("shenzhen")```中的**shenzhen**对应的是ReactNative中的**shenzhen.js**文件。```mReactRootView.startReactApplication(mReactInstanceManager,
                "baidu",
                null);```中的**baidu**对应的是shenzhen.js文件中注册的模块名```AppRegistry.registerComponent("baidu", () => Company);```中的**baidu**
                。而这个**Company**就是我们最终要加载的页面Company.js.
