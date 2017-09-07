"use strict";
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import locale from "../localize/Locale";
import { StyleMain } from "../style/StyleAll";
export default class Map extends Component {
  static navigationOptions = {
    title: locale.t("targets"),
    headerTintColor: "#ffffff",
    headerStyle: StyleMain.header,
    headerTitleStyle: StyleMain.headerTitle,
    tabBarVisible: true
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <View />;
  }
}
const styles = StyleSheet.create({});
