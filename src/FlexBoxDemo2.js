import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
export default class FlexBoxDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3],
      itemWidth: 80
    };
  }
  componentWillMount() {
    // this.setStyles();
  }
  render() {
    return (
      <View style={styles.flexBoxDemoContainer}>
        <View style={styles.item}>
          <Text>1</Text>
        </View>
        <View style={styles.item}>
          <Text>2</Text>
        </View>
        <View style={styles.item}>
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexBoxContainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },

  flexBoxDemoContainer: {
    flexDirection: "row",
    padding: 16,
    borderColor: "#ece8d9",
    borderStyle: "solid",
    borderWidth: 16,
    height: "50%",
    width: "100%"
  },
  item: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#00adb5",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  flexPropertiesContainer: {
    flexDirection: "row",
    padding: 8,
    borderColor: "#ece8d9",
    borderStyle: "solid",
    borderWidth: 8,
    height: "50%",
    width: "100%"
  }
});
