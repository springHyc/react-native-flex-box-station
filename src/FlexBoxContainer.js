//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import FlexPropertiesContainer2 from "./FlexPropertiesContainer2";
import FlexBoxDemo from "./FlexBoxDemo";
import FlexBoxDemo2 from "./FlexBoxDemo2";

export default class FlexBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: null
    };
  }

  handleProperties(properties) {
    this.setState({ properties });
  }
  render() {
    return (
      <View style={styles.FlexBoxContainer}>
        <FlexBoxDemo2 />
        <FlexPropertiesContainer2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlexBoxContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column"
  }
});
