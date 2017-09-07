import SegmentedControlTab from "react-native-segmented-control-tab";
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Switch } from "react-native";
export default class StopSmoking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1
    };
  }
  handleIndexChange = index => {
    this.setState({ selectedIndex: index });
  };
  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={(this.state && this.state.switchValue) || false}
          onValueChange={value => {
            this.setState({ switchValue: value });
          }}
          // Color props are iOS-only
          // thumbTintColor={'white'} // Removes shadow
          tintColor={"rgba(230,230,230,1)"}
          onTintColor={"rgba(68,219,94,1)"}
        />
        <SegmentedControlTab
          values={["First", "Second", "Third"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("StopSmoking", () => StopSmoking);
