"use strict";
//https://reactnavigation.org/docs/navigators/tab
import locale from "./localize/Locale";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import QuitIt from "./screen/QuitIt";
import Health from "./screen/Health";
import Targets from "./screen/Targets";
import Settings from "./screen/Settings";
import DetailTest from "./screen/DetailTest";
import { NavigationComponent } from "react-native-material-bottom-navigation";
import { StyleMain } from "./style/StyleAll";

//Tab Quit it
export const QuitItStack = StackNavigator({
  Screen_QuitIt: { screen: QuitIt },
  Screen_DetailTest: { screen: DetailTest }
});

// Tab health
export const HealthStack = StackNavigator({
  Screen_Health: { screen: Health }
});

// Tab targets
export const TargetsStack = StackNavigator({
  Screen_Targets: { screen: Targets }
});

// Tab settings
export const SettingsStack = StackNavigator({
  Screen_Settings: { screen: Settings }
});

const TabNavigatorConfig = {
  //tabBarComponent: NavigationComponent,
  initialRouteName: "Tab4",
  tabBarPosition: "bottom", // or top
  swipeEnabled: false, //whether to allow swiping between tabs
  animationEnabled: false, //whether to animate when changing tabs
  tabBarOptions: {
    showLabel: true,
    upperCaseLabel: false,
    scrollEnabled: false,
    activeTintColor: "#00b421",
    inactiveTintColor: "#ffffff",
    //inactiveBackgroundColor: "#00b421", //only for ios
    //activeBackgroundColor: "#ffffff", // only for ios
    showIcon: true,
    lazyLoad: true,
    style: {
      margin: 0,
      padding: 0,
      backgroundColor: "#14203c",
      borderTopWidth: 1, // line top
      borderTopColor: "#263f51" // color top line
    },
    indicatorStyle: {
      opacity: 0 // disable bottom line of android
      //borderBottomColor: "#353539",
      //borderBottomWidth: 2,
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
      padding: 0
    },
    iconStyle: {
      margin: 0,
      padding: 0
    },
    tabStyle: {
      //justifyContent: "space-around",
      //alignItems: "center"
      margin: 0,
      padding: 0
    }
  }
};

const RouteConfigs = {
  Tab1: {
    screen: QuitItStack,
    navigationOptions: {
      tabBarLabel: locale.t("quit_it"),
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./resources/ic_bottom_profile.png")}
          style={[StyleMain.iconTabar, { tintColor: tintColor }]}
        />
      )
    }
  },
  Tab2: {
    screen: HealthStack,
    navigationOptions: {
      tabBarLabel: locale.t("health"),
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./resources/ic_bottom_profile.png")}
          style={[StyleMain.iconTabar, { tintColor: tintColor }]}
        />
      )
    }
  },
  Tab3: {
    screen: TargetsStack,
    navigationOptions: {
      tabBarLabel: locale.t("targets"),
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./resources/ic_bottom_profile.png")}
          style={[StyleMain.iconTabar, { tintColor: tintColor }]}
        />
      )
    }
  },
  Tab4: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: locale.t("settings"),
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./resources/ic_bottom_setting.png")}
          style={[StyleMain.iconTabar, { tintColor: tintColor }]}
        />
      )
    }
  }
};

//TabNavigator(RouteConfigs, TabNavigatorConfig)
export const Tabbar = TabNavigator(RouteConfigs, TabNavigatorConfig);
