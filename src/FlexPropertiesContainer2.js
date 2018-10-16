import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
  ScrollView
} from "react-native";
import { CheckBox, Button } from "react-native-elements";

const properties = {
  flexDirection: {
    title: "flex-direction属性决定主轴的方向(即子元素的排列方向)",
    value: [
      {
        id: "row",
        defaultChecked: true,
        title: "主轴为水平方向，起点在左端"
      },
      {
        id: "row-reverse",
        defaultChecked: false,
        title: "主轴为水平方向，起点在右端"
      },
      {
        id: "column",
        defaultChecked: false,
        title: "主轴为垂直方向，起点在上沿"
      },
      {
        id: "column-reverse",
        defaultChecked: false,
        title: "主轴为垂直方向，起点在下沿"
      }
    ]
  },
  justifyContent: {
    title: "justify-content属性定义了项目在主轴上的对齐方式",
    value: [
      {
        id: "flex-start",
        defaultChecked: true,
        title: "(默认值)左对齐"
      },
      {
        id: "flex-end",
        defaultChecked: false,
        title: "右对齐"
      },
      {
        id: "center",
        defaultChecked: false,
        title: "居中"
      },
      {
        id: "space-between",
        defaultChecked: false,
        title: "两端对齐，项目之间的间隔都相等"
      },
      {
        id: "space-around",
        defaultChecked: false,
        title:
          "每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。"
      }
    ]
  },
  alignItems: {
    title: "align-items属性定义项目在交叉轴上如何对齐",
    value: [
      {
        id: "flex-start",
        defaultChecked: false,
        title: "交叉轴的起点对齐"
      },
      {
        id: "flex-end",
        defaultChecked: false,
        title: "交叉轴的终点对齐"
      },
      {
        id: "center",
        defaultChecked: false,
        title: "交叉轴的中点对齐"
      },
      {
        id: "baseline",
        defaultChecked: false,
        title: "项目的第一行文字的基线对齐"
      },
      {
        id: "stretch",
        defaultChecked: true,
        title: "主轴为垂直方向，起点在下沿"
      }
    ]
  },
  flexWrap: {
    title:
      '默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行，以及它的换行方式。',
    value: [
      {
        id: "nowrap",
        defaultChecked: true,
        title: "(默认)不换行"
      },
      {
        id: "wrap",
        defaultChecked: false,
        title: "换行，第一行在最上方"
      },
      {
        id: "wrap-reverse",
        defaultChecked: false,
        title: "换行，第一行在最下方"
      }
    ]
  },
  alignContent: {
    title:
      " align-content属性用于修改flex-wrap属性的行为。类似于align-item,但它不是设置弹性元素的对齐，而是设置各个行的对齐。如果弹性元素只有一行，该属性不起作用。",
    value: [
      {
        id: "flex-start",
        defaultChecked: false,
        title: "与交叉轴的起点对齐"
      },
      {
        id: "flex-end",
        defaultChecked: false,
        title: "与交叉轴的终点对齐"
      },
      {
        id: "center",
        defaultChecked: false,
        title: "与交叉轴的中点对齐"
      },
      {
        id: "space-between",
        defaultChecked: false,
        title: "与交叉轴两端对齐，轴线之间的间隔平均分布"
      },
      {
        id: "space-around",
        defaultChecked: false,
        title:
          "每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍"
      },
      {
        id: "stretch",
        defaultChecked: true,
        title: "(默认值)轴线占满整个交叉轴"
      }
    ]
  }
};
export default class FlexPropertiesContainer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      propertyTitles: null,
      properties: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        flexWrap: "nowrap",
        alignContent: "stretch"
      }
    };
  }

  componentDidMount() {
    this.props.handleProperties(this.state.properties); // 向它的父组件传递
  }

  handleProperty(property) {
    if (this.state.properties) {
      const properties = this.state.properties;
      const newProperties = { ...properties, ...property };
      this.setState({ properties: newProperties });
      this.props.handleProperties(newProperties); // 向它的父组件传递
    }
  }

  show(key) {
    this.setState({ propertyTitles: properties[key], flexProperty: key });
  }
  render() {
    const keys = Object.keys(properties);
    return (
      <View style={styles.flexPropertiesContainer}>
        <Text className="FlexPropertiesContainer-title">
          父Flex属性 - Flex容器 - 点击设置
        </Text>
        <View style={styles.properties}>
          <View style={styles.keys}>
            {keys.map(item => {
              return this.state.flexProperty === item ? (
                <Button
                  title={item}
                  containerViewStyle={{
                    marginBottom: 8
                  }}
                  borderRadius={8}
                  backgroundColor={"#00adb5"}
                  onPress={() => this.show(item)}
                  rightIcon={{ name: "arrow-forward" }}
                />
              ) : (
                <Button
                  title={item}
                  containerViewStyle={{
                    marginBottom: 8
                  }}
                  borderRadius={8}
                  backgroundColor={"#00adb5"}
                  onPress={() => this.show(item)}
                />
              );
            })}
          </View>
          <ScrollView style={styles.keys}>
            {this.state.propertyTitles &&
              this.state.propertyTitles.value.map(item => {
                return (
                  <CheckBox
                    title={item.id}
                    checked={
                      this.state.properties[this.state.flexProperty] === item.id
                    }
                    raised
                    icon={{ name: "cached" }}
                    onPress={() => {
                      if (!!!this.state[item.id]) {
                        this.handleProperty({
                          [this.state.flexProperty]: item.id
                        });
                      } else {
                      }
                    }}
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexPropertiesContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
    textAlign: "center",
    height: "100%"
  },
  ["FlexPropertiesContainer-title"]: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center"
  },
  properties: {
    flexDirection: "row"
  },
  keys: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    borderColor: "#ece8d9",
    borderStyle: "solid",
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    height: "100%",
    marginBottom: 8
  }
});
