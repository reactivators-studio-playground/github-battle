import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "appear-enter": {
        "transitionDuration": ".7s",
        "transitionProperty": "opacity",
        "transitionTimingFunction": "ease-out",
        "opacity": 0
    },
    "appear-enterappear-enter-active": {
        "opacity": 1
    },
    "appear-leave": {
        "opacity": 0
    }
});