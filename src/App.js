import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import codePush from "react-native-code-push";

import FlexBoxContainer from "./FlexBoxContainer";

class App extends Component {
  open = () => {
    const url = "https://github.com/springHyc/FlexBoxDemoStation";
    Linking.openURL(url);
  };
  render() {
    return (
      <View style={styles.App}>
        <View style={styles["App-header"]}>
          <Text style={styles["App-title"]}>FlexBox 演示站</Text>
          <TouchableWithoutFeedback onPress={this.open}>
            <View style={styles["App-content"]}>
              <Text style={styles["content"]}>
                如果你觉得这个FlexBox
                演示站对你有所帮助，请点击[链接]，给我个star，非常感谢!
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <FlexBoxContainer />
      </View>
    );
  }
}

export default codePush(App);

const styles = StyleSheet.create({
  App: {
    textAlign: "center",
    height: "100%"
  },

  ["App-header"]: {
    backgroundColor: "#393e46",
    padding: 20,
    height: "20%"
  },

  ["App-title"]: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
    color: "white"
  },

  ["App-intro"]: {
    fontSize: 20
  },
  ["App-content"]: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  content: {
    color: "white"
  }
});
