"use strict";
import locale from "../localize/Locale";
var StoreDefault = {
  settings: {
    nicotin: 0.1, //0.1->3.1
    tar: 10, //1->31
    carbon_nonoxide: 10, //1->31
    cigarettes_day: 10, //1->80
    cigarettes_pack: 20, //5->100
    price_pack: 5, //1->200
    quit_date: null,
    notify_health_status: true,
    notify_readched_milestones: true,
    widget_passed_time: true, //note: widget only one true
    wedget_saved_money: false,
    wedget_saved_cigarettes: false
  },
  targets: [
    {
      name: locale.t("targets_name_detault_1"),
      money: 3.0
    },
    {
      name: locale.t("targets_name_detault_2"),
      money: 24.0
    },
    {
      name: locale.t("targets_name_detault_3"),
      money: 79
    }
  ]
};
export default StoreDefault;
