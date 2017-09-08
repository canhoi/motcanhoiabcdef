"use strict";
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import locale from "../localize/Locale";
import { StyleMain } from "../style/StyleAll";
export default class Map extends Component {
  static navigationOptions = {
    title: locale.t("quit_it"),
    headerTintColor: "#ffffff",
    headerStyle: StyleMain.header,
    headerTitleStyle: StyleMain.headerTitle,
    tabBarVisible: true
  };
  constructor(props) {
    super(props);
  }
  onGoBack() {
    console.log("back is==============================================");
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ backgroundColor: "green" }}
          onPress={() => {
            this.props.navigation.navigate("Screen_DetailTest", {
              thamso: "chuỗi này nhận từ home",
              onGoBack: this.onGoBack
            });
          }}
        >
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

{
  /* style={{ flex: 1, justifyContent: "center", alignItems: "center" }
<TouchableOpacity
          style={{ backgroundColor: "green" }}
          onPress={() => {
            this.props.navigation.navigate("Manhinh_Detail", {
              thamso: "chuỗi này nhận từ home"
            });
          }}
        >


<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'green' }}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Text style={{ color: '#fff', fontSize: 20, padding: 10 }}>Back</Text>
                </TouchableOpacity>
                <Text>{this.props.navigation.state.params.thamso}</Text>
            </View> */
}
