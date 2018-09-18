//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import FlexPropertiesContainer from "./FlexPropertiesContainer";
import FlexBoxDemo from "./FlexBoxDemo";

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
      <View className="FlexBoxContainer" style={styles.FlexBoxContainer}>
        <FlexPropertiesContainer
          handleProperties={this.handleProperties.bind(this)}
        />
        {/* <FlexBoxDemo properties={this.state.properties} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlexBoxContainer: {
    backgroundColor: "beige",
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  }
});
