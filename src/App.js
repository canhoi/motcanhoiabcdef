"use strict";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Tabbar } from "./Router";
export default class App extends Component {
  state = {
    appIsReady: false
  };
  componentWillMount() {
    this.setState({ appIsReady: true });
  }
  render() {
    if (!this.state.appIsReady) {
      //
    }
    return <Tabbar />;
  }
}
