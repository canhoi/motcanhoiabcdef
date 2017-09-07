//https://github.com/AlexanderZaytsev/react-native-i18n
"use strict";
import I18n from "react-native-i18n";
import en from "./locales/en";

I18n.fallbacks = true;
I18n.translations = {
  en
};
//I18n.translations = {
// en,
// vi
//};
I18n.defaultLocale = "en";
//I18n.locale = "en";
export default I18n;
