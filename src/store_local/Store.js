"use strict";
import { AsyncStorage } from "react-native";
import StoreKey from "../store_local/StoreKey";
import StoreDefault from "../store_local/StoreDefault";

export default class Store {
  static async getSettings() {
    var rs = null;
    try {
      rs = await AsyncStorage.getItem(StoreKey.settings);
      if (rs === null) {
        rs = StoreDefault.settings;
      }
    } catch (e) {
      rs = StoreDefault.settings;
      console.log("Get settings exception: " + e);
    }
    return rs;
  }
  static async setSettings(settings) {
    var rs = false;
    try {
      await AsyncStorage.setItem(StoreKey.settings, settings);
      rs = true;
    } catch (e) {
      console.log("Set settings exception: " + e);
    }
    return rs;
  }
  static async getTargets() {
    var rs = null;
    try {
      rs = await AsyncStorage.getItem(StoreKey.targets);
      if (rs === null) {
        rs = StoreDefault.targets;
      }
    } catch (e) {
      rs = StoreDefault.targets;
      console.log("Get targets exception: " + e);
    }
    return rs;
  }
  static async setTargets(targets) {
    var rs = false;
    try {
      await AsyncStorage.setItem(StoreKey.targets, targets);
      rs = true;
    } catch (e) {
      console.log("Set targets exception: " + e);
    }
    return rs;
  }
}
