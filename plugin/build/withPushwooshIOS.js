"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPushwooshIOS = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withCapabilities = (config, props) => {
    return (0, config_plugins_1.withInfoPlist)(config, (plist) => {
        if (!Array.isArray(plist.modResults.UIBackgroundModes)) {
            plist.modResults.UIBackgroundModes = [];
        }
        if (!plist.modResults.UIBackgroundModes.includes("remote-notification")) {
            plist.modResults.UIBackgroundModes.push("remote-notification");
        }
        return plist;
    });
};
const withAPNSEnvironment = (config, props) => {
    return (0, config_plugins_1.withEntitlementsPlist)(config, (plist) => {
        plist.modResults['aps-environment'] = props.mode;
        return plist;
    });
};
const withPushwooshIOS = (config, props) => {
    config = withCapabilities(config, props);
    config = withAPNSEnvironment(config, props);
    return config;
};
exports.withPushwooshIOS = withPushwooshIOS;
