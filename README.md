# react-native-flex-box-station

APP 版本的 FlexBox 演示站

## 与 react 的不同点

- 需要的环境
  - iOS： Xcode
  - android: AndroidStudio
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

- 调试工具以及方法
  - [devTools](https://github.com/facebook/react-devtools) DOM 结构查看
  - [reactotron](https://github.com/infinitered/reactotron)redux 的调试
