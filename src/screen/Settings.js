"use strict";
import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import locale from "../localize/Locale";
import { StyleMain } from "../style/StyleAll";
import Store from "../store_local/Store";
export default class Map extends Component {
  static navigationOptions = {
    title: locale.t("settings"),
    headerTintColor: "#ffffff",
    headerStyle: StyleMain.header,
    headerTitleStyle: StyleMain.headerTitle,
    tabBarVisible: true
  };

  constructor(props) {
    super(props);
    this.state = {
      my: 1
    };
  }
  componentWillMount() {
    this.getSettings();
  }
  async getSettings() {
    let settings = await Store.getSettings();
    this.setState({
      my: settings.nicotin
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.my}</Text>
      </View>
    );
  }
}
