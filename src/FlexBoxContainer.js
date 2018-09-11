//@flow
import React, { Component } from "react";
import { View } from "react-native";
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
      <View className="FlexBoxContainer">
        <Text>测试啦啦啦</Text>
        {/* <FlexPropertiesContainer
          handleProperties={this.handleProperties.bind(this)}
        /> */}
        {/* <FlexBoxDemo properties={this.state.properties} /> */}
      </View>
    );
  }
}

// .FlexBoxContainer {
//   background-color: beige;
//   display: flex;
//   flex: 1;
//   width: 100%;
//   flex-direction: row;
//   justify-content: center;
// }
