//@flow
import React, { Component } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import FlexPropertiesContainer2 from "./FlexPropertiesContainer2";
import FlexBoxDemo2 from "./FlexBoxDemo2";
import { Icon } from "react-native-elements";

export default class FlexBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexProperty: null,
      value: null,
      len: 3
    };
  }

  handleProperties = properties => {
    this.setState({ properties });
  };

  render() {
    return (
      <View style={styles.FlexBoxContainer}>
        <View style={styles.bt}>
          <Icon
            raised
            name="minus"
            type="font-awesome"
            color="#f50"
            size={10}
            onPress={() => {
              if (this.state.len === 0) {
                Alert.alert("item数量不能再减少了");
              } else {
                this.setState({ len: this.state.len - 1 });
              }
            }}
          />
          <Text>{this.state.len}</Text>
          <Icon
            raised
            name="plus"
            type="font-awesome"
            color="#f50"
            size={10}
            onPress={() => {
              if (this.state.len === 16) {
                Alert.alert("item数量不能再增加了");
              } else {
                this.setState({ len: this.state.len + 1 });
              }
            }}
          />
        </View>
        <FlexBoxDemo2 properties={this.state.properties} len={this.state.len} />
        <FlexPropertiesContainer2 handleProperties={this.handleProperties} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bt: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  FlexBoxContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column"
  }
});
