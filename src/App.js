import React, { Component } from "react";
import { View, Text,StyleSheet } from "react-native";
// import "./App.css";
import FlexBoxContainer from "./FlexBoxContainer";

class App extends Component {
  render() {
    return (
      <View style={styles.App}>
        <View style={styles["App-header"]}>
          <Text style={styles["App-title"]}>FlexBox 演示站</Text>
          <Text>
            如果你觉得这个FlexBox 演示站对你有所帮助，请点击
            <Text href="https://github.com/springHyc/FlexBoxDemoStation">链接</Text>
            ，给我个star，非常感谢！
          </Text>
        </View>
        {/* <FlexBoxContainer /> */}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  App: {
    textAlign: "center"
  },

  ["App-header"]: {
    backgroundColor: "#222",
    padding: 20,
    color: "white"
  },

  ["App-title"]: {
    fontSize: 15
  },

  ["App-intro"]: {
    fontSize: 20
  }

  // @keyframes App-logo-spin {
  //   from {
  //     transform: rotate(0deg);
  //   }
  //   to {
  //     transform: rotate(360deg);
  //   }
  // }

  // a:link,
  // a:visited {
  //   color: #60d7f8;
  // }
});
