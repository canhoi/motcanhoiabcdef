"use strict";
import { StyleSheet } from "react-native";

export const StyleMain = StyleSheet.create({
  iconTabar: {
    margin: 0,
    padding: 0,
    width: 24,
    height: 24
  },
  header: {
    bottom: 0,
    right: 0,
    height: 46,
    backgroundColor: "#14203c",
    shadowColor: "black",
    shadowRadius: 0.3,
    shadowOffset: {
      height: 0.3
    },
    elevation: 2 // height of shadow
  },
  headerTitle: {
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 0,
    marginRight: 0
    //color: "#ffffff"
  },
  headerTitleMarginRight: {
    textAlign: "center",
    alignSelf: "center",
    marginRight: 58
    // color: "#ffffff"
  }
});
