"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler
} from "react-native";
import locale from "../localize/Locale";
import { StyleMain } from "../style/StyleAll";
export default class Map extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: locale.t("detail_test"),
    headerTintColor: "#ffffff",
    headerStyle: StyleMain.header,
    headerTitleStyle: StyleMain.headerTitleMarginRight,
    tabBarVisible: false
  });
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener("backPress", this.backHardware);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("backPress", this.backHardware);
  }
  backHardware() {
    let canNotBack = true;
    if (canNotBack) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ backgroundColor: "green" }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, padding: 10 }}>Back</Text>
        </TouchableOpacity>
        <Text>{this.props.navigation.state.params.thamso}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
