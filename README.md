# ReactNative 开发 APP 分享

## 摘要

-  是什么原因促使人们研究 `react-native`，为什么使用 `react-native`?
- `react-native` 的构架，原理，是怎么样把 `react` 写的前端转换为原生应用的？
- 我们都有 `react` 的开发经验，那么在开发时，与 `react` 的区别和需要注意的地方
- 简单介绍一下 `react-native` 环境安装
- 优缺点

## 1. 什么是`react-native`？

我们都知道 React 是在 web 上开发用户界面的利器。使用 React 来开发 UI 的话，就能够描述你想要什么，而不是告诉 UI 如何更新 (响应式 UI)，还可以在可重用组件中组织代码，并创建高性能用户界面，而无需担心 DOM 超慢的速度 (虚拟 DOM)。越来越多的开发者选择 React 是因为它可以使得开发者更专注于上层业务，而不是底层 DOM 更新的细节。我们将这种开发 UI 的方式称之为 React 范式。

ReactNative 是一个完整的平台，它可以让你使用 JavaScript 来开发真正的原生应用，而且还是用 React 的路子来写(React 范式)。

下面我们详细了解一下，ReactNative 如何是一个完整的平台，它可以让你使用 JavaScript 来开发真正的原生应用？

### 渲染器（renderer）和全新的 React

对于 web 应用来说，React 负责弃用 React 范式（管理响应式 UI、组件和虚拟 DOM），以及实际更新浏览器中的 DOM。当 DOM 是唯一需要交互的对象时，React 可以轻松处理好这两项任务。

但是对于原生应用来说，需要管理不同的平台，原本的 React 就不堪重负了。为了解决此问题，React 创建者们将原来的 React 拆分成两部分：

- 全新的 React，只负责启用 React 范式。
- ReactDOM,只负责与浏览器中的 DOM 进行交互。因为 ReactDOM 负责更新 DOM ，而 DOM 又决定了浏览器渲染的内容，所以我们将 ReactDOM 称之为渲染器。

从负责与 Domo 沟通的枷锁中释放后，React 现在可以专注于做他最擅长的事。这种角色分离的理念非常之强大。现在我们只需要维护一个共享的核心库，同时编写全新的渲染器来适应新平台。这种方式要比之前简单多了。由于有了 iOS 和安卓渲染器的强力支撑，现在你可以只使用一种语言和相同的 React 范式来同时为两个平台开发应用。

### 一个完整的平台

像 React 一样，React 的官网定义是：用来开发用户界面的 JavaScript 库。首先它是 UI 开发的利器，其次它不涉及 UI 开发以外的其他领域。

我们想要开发一个完整的应用，需要 css 来写外观样式，需要 webpack 来打包等等。在 web 环境下开发有利许多，React 本身就是一个 JavaScript 库，它能自然而然的适应 web 环境下的其他部件。

但是对于移动端来说就比较困难了，因为移动端需要支持多种语言和技术，这个时候，我们就要需要包含一整套部件，而且这些部件的使用方法要跟 React 类似，至少是能用 JavaScript 来调用，这样，ReactNative 就诞生了。

相比 web 上的 React,ReactNative 包含更多东西：

- 全新的 React 作为核心库
- iOS 和安卓的渲染器
- 将代码转换成可安装应用的工具
- 原生 UI 组件 (状态栏、列表等等)和动画
- UI 的样式和布局工具箱 (flexbox)
- 构建大多数应用的基础部分 (比如网络)
- 提供原生功能的部分，比如粘贴板、加速计和存储
  ...

### 原生 UI

ReactNative 的标志性特征：ReactNative 的内置 UI 是有原生 UI 组件组成的，这些组件表现良好。用 ReactNative 开发的应用就像 swift 和 Java 开发的原生 APP 体验一样呢。

原生 UI 是让 ReactNative 大放异彩的原因之一。

## 2. 为什么使用 `react-native`来开发 APP？

对于移动端来说，不同的系统之间是完全不同的，在过去，要开发原生应用的话，developer 需要学习特定的语言和平台工具链。比如：iOS 开发和安卓开发。这有点像在国外的工作室上班，员工需要说不同的语言，你需要精通所有语言才能跟所有的模特进行交流，这不仅仅是听上去很麻烦，实践起来也是超级麻烦与有成本代价的！

所以，如果你想开发的原生应用能运行在 iOS 和安卓两大主流平台的话，你就需要创建两台完全分离的代码库，同样的业务逻辑需要写两遍，开发应用困难，成本又高，而且极其不利于长期的维护。

这正是 ReactNative 诞生的原因。有了`react-native`我们可以只需要写一套逻辑，应用就可以运行在 iOS 和安卓两大主流平台上。

虽然 Facebook 发布的条款导致很多大公司都分分开始弃用 react-native，目前能够代替 React 的语言和技术有很多，但是找到一个真正能够代替 RN 的却很难。

综上，我们了解了`react-native`是什么，那么接下来让我们来了解一下它的架构以及原理。

## 3. `react-native`的架构以及原理？

### 整体架构

ReactNative 可以让 JavaScript 开发者大部分使用 js 代码就可以构建一个跨平台的 APP。

Facebook 官方说法是 `learn once, run everywhere`， 即在 Android 、 IOS、 Browser 各个平台，程序画 UI 和写逻辑的方式都大致相同。因为 JS 可以动态加载，从而理论上可以做到 `write once, run everywhere`， 当然要做额外的适配处理。如图：

![react-native架构图](./images/react-native.jpeg)

`react-native`需要一个 js 的运行环境，在 iOS 上直接使用内置的 JavaScriptcore,在 Android 上则使用 webkit.org 官方开源的 jsc.so。

RN 会把应用的 JS 代码（包括依赖的 framework）编译成一个 js 文件（一般命名为 index.android.bundle), , RN 的整体框架目标就是为了解释运行这个 js 脚本文件，如果是 js 扩展的 API， 则直接通过 bridge 调用 native 方法; 如果是 UI 界面， 则映射到 virtual DOM 这个虚拟的 JS 数据结构中，通过 bridge 传递到 native ， 然后根据数据属性设置各个对应的真实 native 的 View。 bridge 是一种 JS 和 JAVA 代码通信的机制， 用 bridge 函数传入对方 module 和 method 即可得到异步回调的结果。

对于 JS 开发者来说， 画 UI 只需要画到 virtual DOM 中，不需要特别关心具体的平台, 还是原来的单线程开发，还是原来 HTML 组装 UI（JSX），还是原来的样式模型（部分兼容 )。RN 的界面处理除了实现 View 增删改查的接口之外，还自定义一套样式表达 CSSLayout，这套 CSSLayout 也是跨平台实现。 RN 拥有画 UI 的跨平台能力，主要是加入 Virtual DOM 编程模型，该方法一方面可以照顾到 JS 开发者在 html DOM 的部分传承， 让 JS 开发者可以用类似 DOM 编程模型就可以开发原生 APP ， 另一方面则可以让 Virtual DOM 适配实现到各个平台，实现跨平台的能力，并且为未来增加更多的想象空间， 比如 react-cavas, react-openGL。而实际上 react-native 也是从 react-js 演变而来。

对于 Android 开发者来说， RN 是一个普通的安卓程序加上一堆事件响应， 事件来源主要是 JS 的命令。主要有二个线程，UI main thread, JS thread。 UI thread 创建一个 APP 的事件循环后，就挂在 looper 等待事件 , 事件驱动各自的对象执行命令。 JS thread 运行的脚本相当于底层数据采集器， 不断上传数据，转化成 UI 事件， 通过 bridge 转发到 UI thread, 从而改变真实的 View。 后面再深一层发现， UI main thread 跟 JS thread 更像是 CS 模型，JS thread 更像服务端， UI main thread 是客户端， UI main thread 不断询问 JS thread 并且请求数据，如果数据有变，则更新 UI 界面。

这也就回答了“`react-native`是怎么把写好的 code 转化为原生应用到的？”。

其实使用`react-native`来开发 iOS 或者 Android 应用，我们都不用太关心，他们是如何转化省原生应用的，这部分属于高级部分，可以等有了一个比较全面的认识之后再去详细了解。

### 通讯机制

RN 框架最主要的就是实现了一套 JAVA 和 JS 通信的方案，该方案可以做到比较简便的互调对方的接口。一般的 JS 运行环境是直接扩展 JS 接口，然后 JS 通过扩展接口发送信息到主线程。但 RN 的通信的实现机制是单向调用，Native 线程定期向 JS 线程拉取数据， 然后转成 JS 的调用预期，最后转交给 Native 对应的调用模块。这样最终同样也可以达到 Java 和 JS 定义的 Module 互相调用的目的。

## 4. 对比`react`我们来看下`react-native`

我们从以下几方面来了解以下`react-native`:

- 环境
- css
- 调试工具
- 启动命令
- react-native 的两种 APP 更新方式
- react-native 对手机版本的要求
  iOS (7+)
  Android (4.1+)
- 使用上的细节区别

### 环境

| ---  | react-native                          | react  |
| ---- | ------------------------------------- | ------ |
| 环境 | iOS： Xcode，android: AndroidStudio。 | 浏览器 |

以上两种软件环境是用来模拟手机，也可以使用真机来测试。

### css 与 html

- html
  React Native 与 React 类似，但它使用 native 组件而不是 Web 组件作为构建块。因此，要了解 React Native 应用程序的基本结构，您需要了解一些基本的 React 概念，例如 JSX，组件，state 和 props。如果你已经知道 React，你仍然需要学习一些特定于 React-Native 的东西，比如 native 组件。like: `View`，`Text`等。react-native 中不使用 html 的标签，也就是没有`<div>\<span>\<header>`等标签。通用的是`<View>`和`<Text>`,可以将二者理解对应为`<div>`和`<span>`。

  > 由于我是从 angularjs 的技术堆栈转过来直接做`react-native`的， 所以当时特别不适应，也就是 HTML 和 css 这两点是有较大的区别的，另外还有一点不适应的地方就是 jsx，不过大家都在写 react，所以这方面的不适应应该已经消除了。

- css 不同

RN 的界面处理除了实现 View 增删改查的接口之外，还自定义一套样式表达 CSSLayout，这套 CSSLayout 也是跨平台实现。所以样式的实现是`react-native`自己的。

组件可以使用 flexbox 算法指定其子项的布局。Flexbox 旨在为不同的屏幕尺寸提供一致的布局。Flexbox 在 React Native 中的工作方式与在 Web 上的 CSS 中的工作方式相同，但有一些例外。默认值不同，flexDirection 默认为 column 而不是 row，flex 参数仅支持单个数字。

> 摘自 [react-native 官网](https://facebook.github.io/react-native/docs/flexbox)
> 布局还会用到许多其他的样式， [此处](https://facebook.github.io/react-native/docs/layout-props)记录了详细的控制布局的 props 的完整列表。

有效的 style props：

```jsx
Valid style props: [
"alignContent",
"alignItems",
"alignSelf",
"aspectRatio",
"backfaceVisibility",
"backgroundColor",
"borderBottomColor",
"borderBottomEndRadius",
"borderBottomLeftRadius",
"borderBottomRightRadius",
"borderBottomStartRadius",
"borderBottomWidth",
"borderColor",
"borderEndColor",
"borderEndWidth",
"borderLeftColor",
"borderLeftWidth",
"borderRadius",
"borderRightColor",
"borderRightWidth",
"borderStartColor",
"borderStartWidth",
"borderStyle",
"borderTopColor",
"borderTopEndRadius",
"borderTopLeftRadius",
"borderTopRightRadius",
"borderTopStartRadius",
"borderTopWidth",
"borderWidth",
"bottom",
"color",
"decomposedMatrix",
"direction",
"display",
"elevation",
"end",
"flex",
"flexBasis",
"flexDirection",
"flexGrow",
"flexShrink",
"flexWrap",
"fontFamily",
"fontSize",
"fontStyle",
"fontVariant",
"fontWeight",
"height",
"includeFontPadding",
"justifyContent",
"left",
"letterSpacing",
"lineHeight",
"margin",
"marginBottom",
"marginEnd",
"marginHorizontal",
"marginLeft",
"marginRight",
"marginStart",
"marginTop",
"marginVertical",
"maxHeight",
"maxWidth",
"minHeight",
"minWidth",
"opacity",
"overflow",
"overlayColor",
"padding",
"paddingBottom",
"paddingEnd",
"paddingHorizontal",
"paddingLeft",
"paddingRight",
"paddingStart",
"paddingTop",
"paddingVertical",
"position",
"resizeMode",
"right",
"rotation",
"scaleX",
"scaleY",
"shadowColor",
"shadowOffset",
"shadowOpacity",
"shadowRadius",
"start",
"textAlign",
"textAlignVertical",
"textDecorationColor",
"textDecorationLine",
"textDecorationStyle",
"textShadowColor",
"textShadowOffset",
"textShadowRadius",
"textTransform",
"tintColor",
"top",
"transform",
"transformMatrix",
"translateX",
"translateY",
"width",
"writingDirection",
"zIndex"
]
```

直观的比较一下：
react-native:

```jsx
<View style={styles.FlexBoxContainer}>
  <Text>测试啦啦啦</Text>
</View>;
const styles = StyleSheet.create({
  FlexBoxContainer: {
    backgroundColor: beige,
    display: flex,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  }
});
```

    react:

```js
<div className="FlexBoxContainer" />;
.FlexBoxContainer {
  background-color: beige;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
```

下面简单列了几个在写 APP 过程中遇到的不同点，这也是最基本的不同点。
| 不同点 | react | react-native | 备注 |
| --------- | -------------------- | -------------------------- | --------------------------------------- |
| 容器 | div | View | |
| 图片 | img | Image | |
| 文字 | 所有双标签：div\span | Text | react-native 中文字必须放在 Text 标签中 |
| 背景 | background | imageBackground |
| 大小写 | html 标准都是小写 | 所有标签首字母必须大写 |
| 布局样式  | 常见的都支持 | 采用的是 flex 布局 |
| 宽度 | 支持单位 | 不支持百分比，不需要写单位 |

> 布局样式</br>
> 虽然 react-native 也只是 position 中的 absolute 和 relative 以及 flex,但是都是和 HTML 中 css 有所不同的。</br>
> 1.react native 中的 absolute 默认相对于父级，就算父级没有定位，而 css 中的 absolute 是向上寻找的相对点，如果父级没有定位，一直往上找定位参考点
>
> 2.react native 中的 flex 的 flexDirection 默认值是:column 而 css 中的默认值是 row。

### 调试工具以及方法

- [devTools](https://github.com/facebook/react-devtools) - DOM 结构查看
- [reactotron](https://github.com/infinitered/reactotron) - redux 的调试

### 启动命令

- react-native run-ios
- reac-native run-android

### react-native 的两种 APP 更新方式

APP 更新方式有两种：版本更新和自动更新两种，目前我们先介绍版本更新。

#### 版本更新

版本更新也可以叫做手动更新。

会在两个地方有版本更新的提示并可以点击进行安装新版本：

身份认证通过后进入 APP 时，如果当前服务器上的版本高于设备上安装的 APP 版本，则会有新版本更新提示。点击可以安装新版本。
设置中的版本更新页面，也会给出提示，如果有新版本可以点击进行安装。

#### 自动更新

添加 APP 的自动，使用的第三方库是：**[react-native-code-push](https://github.com/Microsoft/react-native-code-push)**。此插件 CodePush 服务提供客户端集成，允许您轻松地向 React Native 通过使用 CodePush 插件，可以让你的 APP 时时和 CodePush 服务的数据保持同步更新，实现热更新，而不用再去繁琐的把应用提交到应用商店，等待审核。这样可以让你的 APP 更快的更新，获得最新的体验，实现双赢。

热更新的原理大致可以的理解为这样，由于 React Native 会将所有需要加载的 js 文件都打包在一个 bundle 文件中，而 app 运行时会加载该文件。所以，如果要升级 app，一个可行的思路就是动态替换该 bundle 文件，然后重启该 app 即可（如果修改了底层 native 代码则需要重新安装该 app ）。

实际上在开发时使用的更新模式就是上面所说的这种，直接替换 bundle 文件。开发环境时使用调试工具可以 Reload JS（替换 bundle 文件），但是在生产环境却不存在该调试工具，需要自己手动实现动态替换 bundle 的功能，而 CodePush 就是实现了该功能的一个工具。

CodePush 是微软提供的一套用于 React Native 和 Cordova 应用的热更新服务。CodePush 是给 React Native 和 Cordova 开发者提供移动应用直接部署更新给用户设备的一项云服务。CodePush 作为一个中央仓库，开发者可以推送更新 (JS, HTML, CSS and images)到 CodePush，应用可以从客户端 SDK 里面查询更新。CodePush 可以让应用有更多的可确定性，也可以让你直接接触用户群。在修复一些小问题和添加新特性的时候，不需要经过二进制打包，可以直接推送代码进行实时更新。

更新方式有两种：默认情况下，CodePush 将在应用每次启动时检查更新，如果有可用的更新，它将被静默下载，并在应用下次重新启动时安装。如果你希望你的应用程序更快的发现更新，你还可以选择每次应用程序从后台恢复时与 CodePush 服务器同步。这个可以根据使用说明来自行设置。

[详细使用方式](https://www.jianshu.com/p/a360d0c08b83)

### 使用上的细节区别

1. 点击事件
   react 是`onClick`,而 react-native 是`onPress`
2. 图标使用
   引入的是第三方的图标库，在引入图标库的时候，一定要进行 link，或者是手动的打开 xcode 进行设置，不过这种方式比较复杂， 不推荐使用，一般在引入的第三方  库中都会有较为详细的使用说明，大家看说明按照步骤操作即可。
   like：引入：`npm install react-native-vector-icons`这个  不错的第三方图标库，需要`link`，`react-native link react-native-vector-icons`。这个错误虽然好解决，但是有时候会经常犯，比如我这次从新写一个 APP，就又没有进行`link`，导致图标出不来，这个问题还不容易想到，所以有时候会浪费一些时间来查找。

## 5. `react-native` 环境安装

环境安装分为 2 部分：iOS 部分和 Android 部分。
需要的环境有：

- node
- xcode(ios)
- Android Studio(android)

详细的环境安装请查看[这里](https://reactnative.cn/docs/getting-started/)。

## 6. 优缺点

最后我们来简单的总结一下优缺点，优点我们  简单说下，上面也是一直在说的，都是`react-native`的优点，正因为有了上面的这些优点，我们才愿意来使用它。

- 快速开发 - 很快就能出来一个可以在 iOS 和 Android 平台上安装的 APP
- 开发迭代速度 - 热更新
- 质量有保证 - UI、不同平台的业务
- 一次编写，多平台共享 - iOS 和 Android
- 提升开发体验 - React 范式 

但是凡事一分为二，有优点，那么相对应的自然也就有缺点，下面让我们来细数一下`react-native`的缺点。

- npm install 下载总出问题
   这一点不只是`react-native`的烦恼，只要是依赖 npm 仓库的项目都会出现的问题，一旦网络不好，有一个包的下载遇到问题，整个下载依赖都会出现问题。
- 论成熟度，稳定性，react-native 比不上 iOS 和 Android 原生。
-  有时候不得不白手起家，因为很多的基础框架中的库还没有 react-native 的封装。
- react-native 升级是个大坑，当初升级很快时，有时候升级了会有一些 bug。
- 有一个属性支持 iOS 却不支持 Android：Zindex
- react-native 未能实现完全的跨平台抽象，有时候仍然需要针对特定平台单独编写代码来解决问题。like：打开文件。另外还需要编写大量桥接基础设施的代码，以保证产品工程师能够有效的工作。

最后，一个很好的消息是，在 18 年 6 月份，React 工程经理 Sophie Alpert 在其官方博客上宣布 Facebook 将要重构 React Native，使其更轻量，更具灵活性，更适应 JavaScript 生态圈的发展。

## 7. 展示一下最新做的简易 APP
