# react-native-flex-box-station

APP 版本的 FlexBox 演示站

## 与 react 的不同点

- 环境
- css
- 调试工具
- 启动命令
- react-native 的两种 APP 更新方式
- react-native 本身的性能问题
- react-native 是怎么运行起来的？React Native 是怎么在 Android /ios 上跑起来的？
- react-native 对手机版本的要求
- jsx
- 使用上的细节区别

### 环境

react-native:

- iOS： Xcode
- android: AndroidStudio

react:

- 浏览器

### css 与 html

- react-native 中不使用 html 的标签，也就是没有`<div>\<span>\<header>`等标签。通用的是`<View>`和`<Text>`,可以将二者对应为`<div>`和`<span>`.

- css 不同

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

| 不同点    | react                | react-native           | 备注                                    |
| --------- | -------------------- | ---------------------- | --------------------------------------- |
| 容器      | div                  | View                   |                                         |
| 图片      | img                  | Image                  |                                         |
| 文字      | 所有双标签：div\span | Text                   | react-native 中文字必须放在 Text 标签中 |
| 背景      | background           | imageBackground        |
| 大小写    | html 标准都是小写    | 所有标签首字母必须大写 |
| 布局样式  | 常见的都支持         | 采用的是 flex 布局     |

> 布局样式</br>
> 虽然 react-native 也只是 position 中的 absolute 和 relative 以及 flex,但是都是和 HTML 中 css 有所不同的。</br>
> 1.react native 中的 absolute 默认相对于父级，就算父级没有定位，而 css 中的 absolute 是向上寻找的相对点，如果父级没有定位，一直往上找定位参考点
>
> 2.react native 中的 flex 的 flexDirection 默认值是:column 而 css 中的默认值是 row。

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

- 调试工具以及方法
  - [devTools](https://github.com/facebook/react-devtools) - DOM 结构查看
  - [reactotron](https://github.com/infinitered/reactotron) - redux 的调试
- 启动命令
  - react-native run-ios
  - reac-native run-android
- react-native 的两种 APP 更新方式
- react-native 本身的性能问题

### 使用上的细节区别

1. 点击事件
   react 是`onClick`,而 react-native 是`onPress`
2. 图标使用
   需要`link`，`react-native link react-native-vector-icons`
