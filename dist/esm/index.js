import * as React from 'react';
import React__default, { useState } from 'react';
import { __makeTemplateObject, __assign } from 'tslib';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

var SliderDirectionVariant;
(function (SliderDirectionVariant) {
    SliderDirectionVariant["HORIZONTAL"] = "horizontal";
    SliderDirectionVariant["VERTICAL"] = "vertical";
})(SliderDirectionVariant || (SliderDirectionVariant = {}));

var BookSliderItemWrapperWidth = 500;
var BookSliderItemWrapperHeight = 110;
var BookSliderItemWrapperVerticalWidth = 90;
var BookSliderItemWrapperVerticalHeight = 100;
var BookSliderItemSquareHW$1 = {
    prevDirection: {
        width: "65px",
        height: "65px",
    },
    direction: {
        width: "75px",
        height: "75px",
    },
    center: {
        width: "85px",
        height: "85px",
    },
};
var BookSliderItemWrapperHorizontal = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: start;\n  margin: 10px auto;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: start;\n  margin: 10px auto;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"])), BookSliderItemWrapperWidth, BookSliderItemWrapperHeight, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var left = _a.left, center = _a.center, right = _a.right, prevLeft = _a.prevLeft, prevRight = _a.prevRight;
    return prevLeft
        ? "translateX(3%)"
        : left
            ? "translateX(20%)"
            : center
                ? "translateX(40.5%)"
                : right
                    ? "translateX(63.5%)"
                    : prevRight
                        ? "translateX(83%)"
                        : "translateX(110%)";
}, function (_a) {
    var theme = _a.theme, center = _a.center;
    return center ? theme.zIndex[100] : theme.zIndex[0];
});
var BookSliderItemSquare = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  opacity: ", ";\n  border-radius: ", ";\n  background: ", ";\n  ", ";\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid ", ";\n  ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  height: ", ";\n  width: ", ";\n  opacity: ", ";\n  border-radius: ", ";\n  background: ", ";\n  ", ";\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid ", ";\n  ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var prevLeft = _a.prevLeft, prevRight = _a.prevRight, left = _a.left, right = _a.right;
    return prevRight || prevLeft
        ? BookSliderItemSquareHW$1.prevDirection.height
        : left || right
            ? BookSliderItemSquareHW$1.direction.height
            : BookSliderItemSquareHW$1.center.height;
}, function (_a) {
    var prevLeft = _a.prevLeft, prevRight = _a.prevRight, left = _a.left, right = _a.right;
    return prevRight || prevLeft
        ? BookSliderItemSquareHW$1.prevDirection.width
        : left || right
            ? BookSliderItemSquareHW$1.direction.width
            : BookSliderItemSquareHW$1.center.width;
}, function (_a) {
    var prevLeft = _a.prevLeft, prevRight = _a.prevRight, left = _a.left, right = _a.right, center = _a.center;
    return !prevLeft && !prevRight && !left && !right && !center ? "0" : "1";
}, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var theme = _a.theme, center = _a.center;
    return center ? theme.colors.secondary : theme.colors.lightGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.nunito_l;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[21];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.black;
});
var BookSliderItemMonth = styled.span(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.nunito_l;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[12];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.black;
});
var BookSliderItemWrapperVertical = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: 10px auto;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: 10px auto;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"])), BookSliderItemWrapperVerticalWidth, BookSliderItemWrapperVerticalHeight, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var top = _a.top, center = _a.center, bot = _a.bot;
    return top
        ? "translateY(0%) scale(0.8);"
        : center
            ? "translateY(110%) scale(1.1);"
            : bot
                ? "translateY(220%) scale(0.8);"
                : "translateY(310%) scale(0);";
}, function (_a) {
    var theme = _a.theme, center = _a.center;
    return (center ? theme.zIndex[100] : "0");
});
var templateObject_1$8, templateObject_2$4, templateObject_3$4, templateObject_4$3;

var BookSliderItem = function (_a) {
    var center = _a.center, item = _a.item, month = _a.month, left = _a.left, right = _a.right, prevLeft = _a.prevLeft, prevRight = _a.prevRight, direction = _a.direction, bot = _a.bot, top = _a.top;
    return direction === SliderDirectionVariant.HORIZONTAL ? (React__default.createElement(BookSliderItemWrapperHorizontal, { center: center, left: left, right: right, prevLeft: prevLeft, prevRight: prevRight, direction: direction },
        React__default.createElement(BookSliderItemSquare, { center: center, left: left, right: right, prevLeft: prevLeft, prevRight: prevRight, direction: direction },
            item,
            React__default.createElement(BookSliderItemMonth, null, month)))) : (React__default.createElement(BookSliderItemWrapperVertical, { center: center, bot: bot, left: left, right: right, prevLeft: prevLeft, prevRight: prevRight, direction: direction, top: top },
        React__default.createElement(BookSliderItemSquare, { center: center, left: left, right: right, prevLeft: prevLeft, prevRight: prevRight, direction: direction },
            item,
            React__default.createElement(BookSliderItemMonth, null, month))));
};

var ButtonVariants;
(function (ButtonVariants) {
    ButtonVariants["PRIMARY"] = "primary";
    ButtonVariants["SECONDARY"] = "secondary";
})(ButtonVariants || (ButtonVariants = {}));
var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes["BUTTON"] = "button";
    ButtonTypes["SUBMIT"] = "submit";
    ButtonTypes["RESET"] = "reset";
})(ButtonTypes || (ButtonTypes = {}));

var svgWidth = 16;
var StyledButton = styled.button(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  ", "\n  font-size: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  ", ";\n  justify-content: center;\n  position: relative;\n  border: none;\n  svg {\n    position: absolute;\n    top: 50%;\n    left: 10%;\n    transform: translate(-10%, -50%);\n    width: ", "px;\n    height: auto;\n  }\n  padding: 6px 36px;\n  cursor: pointer;\n  &:hover {\n    ", "\n  }\n  transition: linear 0.2s;\n"], ["\n  ", "\n  font-size: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  ", ";\n  justify-content: center;\n  position: relative;\n  border: none;\n  svg {\n    position: absolute;\n    top: 50%;\n    left: 10%;\n    transform: translate(-10%, -50%);\n    width: ", "px;\n    height: auto;\n  }\n  padding: 6px 36px;\n  cursor: pointer;\n  &:hover {\n    ", "\n  }\n  transition: linear 0.2s;\n"])), function (_a) {
    var theme = _a.theme, typography = _a.typography;
    return theme.typography[typography];
}, function (_a) {
    var fontSize = _a.fontSize, theme = _a.theme;
    return fontSize || theme.fontSize;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, backgroundColor = _a.backgroundColor;
    return variant === ButtonVariants.PRIMARY
        ? theme.colors.primary
        : variant === ButtonVariants.SECONDARY
            ? theme.colors.secondary
            : backgroundColor;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, color = _a.color;
    return variant === ButtonVariants.PRIMARY
        ? theme.colors.secondary
        : variant === ButtonVariants.SECONDARY
            ? theme.colors.primary
            : color;
}, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var width = _a.width;
    return width || "auto";
}, function (_a) {
    var height = _a.height;
    return height || "auto";
}, function (_a) {
    var margin = _a.margin;
    return margin || "0px";
}, function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
}, svgWidth, function (_a) {
    var theme = _a.theme;
    return theme.hover;
});
var templateObject_1$7;

var Button = function (_a) {
    var children = _a.children, variant = _a.variant, height = _a.height, width = _a.width, onClick = _a.onClick, typography = _a.typography, fontSize = _a.fontSize, backgroundColor = _a.backgroundColor, color = _a.color, margin = _a.margin, icon = _a.icon, buttonTypes = _a.buttonTypes;
    return (React__default.createElement(StyledButton, { variant: variant, buttonTypes: buttonTypes, onClick: onClick, height: height, width: width, typography: typography, fontSize: fontSize, backgroundColor: backgroundColor, color: color, margin: margin, icon: icon },
        icon,
        children));
};

var ChipWrapper = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  padding: 5px 6px;\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  ", ";\n  font-size: ", ";\n  width: fit-content;\n  margin: 5px;\n"], ["\n  padding: 5px 6px;\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  ", ";\n  font-size: ", ";\n  width: fit-content;\n  margin: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background || theme.colors.darkGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.poppins_m;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[6];
});
var templateObject_1$6;

var Chip = function (_a) {
    var text = _a.text, background = _a.background;
    return React__default.createElement(ChipWrapper, { background: background }, text);
};

var Colors;
(function (Colors) {
    Colors["BG_DARK"] = "#1E1F27";
    Colors["BG_LIGHT"] = "#c2b490";
    Colors["WHITE"] = "#FFFFFF";
    Colors["ORANGE"] = "#D98639";
    Colors["BLACK"] = "#000000";
    Colors["EXTRA_DARK_GRAY"] = "rgba(90, 90, 92, 0.8)";
    Colors["DARK_GRAY"] = "#484747";
    Colors["REGULAR_GRAY"] = "rgba(118, 118, 120, 0.9)";
    Colors["LIGHT_GRAY"] = "#BDBDBD";
    Colors["EXTRA_LIGHT_GRAY"] = "#C4C4C4";
    Colors["ASPHALT_COLOR"] = "#313131";
    Colors["WET_ASPHALT_COLOR"] = "rgba(79, 79, 79, 0.3)";
    Colors["LIGHT_ORANGE"] = "#DBA758";
    Colors["RED"] = "#ff4242";
    Colors["GREEN"] = "#36e353";
    Colors["FACEBOOK"] = "#1877F2";
    Colors["SCREEN_DARK"] = "#313131";
})(Colors || (Colors = {}));

var defaultDividerHeight = "4px";
var defaultDividerWidthPercent = "100%";

var DividerWrapper = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var color = _a.color;
    return color;
});
var templateObject_1$5;

var Divider = function (_a) {
    var _b = _a.color, color = _b === void 0 ? Colors.ORANGE : _b, _c = _a.height, height = _c === void 0 ? defaultDividerHeight : _c, _d = _a.width, width = _d === void 0 ? defaultDividerWidthPercent : _d;
    return React__default.createElement(DividerWrapper, { color: color, height: height, width: width });
};

var FacebookSvg = function (props) { return (React.createElement("svg", __assign({ width: "19", height: "20", viewBox: "0 0 19 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M18.129 10.0611C18.129 4.50452 14.0852 0 9.09677 0C4.10839 0 0.0645142 4.50452 0.0645142 10.0611C0.0645142 15.0829 3.36748 19.2453 7.68548 20V12.9694H5.39214V10.0611H7.68548V7.84454C7.68548 5.32297 9.03394 3.93013 11.0971 3.93013C12.0853 3.93013 13.1189 4.12664 13.1189 4.12664V6.60262H11.98C10.858 6.60262 10.5081 7.37817 10.5081 8.17383V10.0611H13.0131L12.6126 12.9694H10.5081V20C14.8261 19.2453 18.129 15.0829 18.129 10.0611Z", fill: "white" }))); };

var FacebookButton = function (_a) {
    var typography = _a.typography, backgroundColor = _a.backgroundColor, buttonTypes = _a.buttonTypes, children = _a.children, color = _a.color, fontSize = _a.fontSize, height = _a.height, margin = _a.margin, onClick = _a.onClick, variant = _a.variant, width = _a.width;
    return (React__default.createElement(Button, { typography: typography, width: width, height: height, fontSize: fontSize, backgroundColor: backgroundColor, color: color, onClick: onClick, icon: React__default.createElement(FacebookSvg, null), buttonTypes: buttonTypes, margin: margin, variant: variant }, children));
};

var GithubSvg = function (props) { return (React.createElement("svg", __assign({ width: "22", height: "24", viewBox: "0 0 22 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M10.9032 2.2467C8.75849 2.2468 6.68377 3.09182 5.05029 4.63055C3.41681 6.16929 2.33116 8.30133 1.9876 10.6452C1.64404 12.989 2.06499 15.3918 3.17513 17.4235C4.28527 19.4551 6.01215 20.9832 8.04679 21.7342C8.4984 21.8217 8.66776 21.5217 8.66776 21.2592C8.66776 21.0217 8.65646 20.2342 8.65646 19.3967C6.38709 19.8592 5.8 18.7842 5.61935 18.2217C5.41891 17.6747 5.10115 17.1899 4.69355 16.8092C4.37742 16.6217 3.9258 16.1592 4.68225 16.1467C4.97109 16.1814 5.24812 16.2927 5.48986 16.4711C5.7316 16.6495 5.93093 16.8899 6.07097 17.1717C6.1945 17.4174 6.36061 17.6337 6.55978 17.8082C6.75895 17.9827 6.98727 18.112 7.23164 18.1886C7.47601 18.2652 7.73165 18.2877 7.98389 18.2548C8.23613 18.2219 8.48002 18.1342 8.70159 17.9967C8.74069 17.4883 8.94534 17.013 9.27742 16.6592C7.26774 16.4092 5.16774 15.5467 5.16774 11.7217C5.15505 10.7279 5.48629 9.76631 6.09355 9.03423C5.81741 8.17045 5.84972 7.22252 6.18387 6.38423C6.18387 6.38423 6.94029 6.12172 8.66774 7.40923C10.1457 6.95921 11.7059 6.95921 13.1839 7.40923C14.9113 6.10923 15.6677 6.38423 15.6677 6.38423C16.0019 7.22251 16.0342 8.17046 15.7581 9.03423C16.3671 9.76506 16.6987 10.7275 16.6839 11.7217C16.6839 15.5592 14.5726 16.4092 12.5629 16.6592C12.7785 16.9011 12.9445 17.1915 13.0497 17.5107C13.1549 17.83 13.1968 18.1705 13.1726 18.5092C13.1726 19.8468 13.1613 20.9217 13.1613 21.2592C13.1613 21.5217 13.3306 21.8342 13.7822 21.7342C15.8133 20.9771 17.5352 19.4455 18.6406 17.4128C19.746 15.38 20.163 12.9785 19.8171 10.6369C19.4711 8.29535 18.3848 6.16608 16.752 4.62922C15.1193 3.09235 13.0463 2.24794 10.9032 2.2467Z", fill: "white" }))); };

var GithubButton = function (_a) {
    var typography = _a.typography, backgroundColor = _a.backgroundColor, buttonTypes = _a.buttonTypes, children = _a.children, color = _a.color, fontSize = _a.fontSize, height = _a.height, margin = _a.margin, onClick = _a.onClick, variant = _a.variant, width = _a.width;
    return (React__default.createElement(Button, { typography: typography, width: width, height: height, fontSize: fontSize, backgroundColor: backgroundColor, color: color, onClick: onClick, icon: React__default.createElement(GithubSvg, null), buttonTypes: buttonTypes, margin: margin, variant: variant }, children));
};

var GoogleSvg = function (props) { return (React.createElement("svg", __assign({ width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("g", { clipPath: "url(#clip0_1_260)" },
        React.createElement("path", { d: "M15.4112 8.65904C15.4112 7.96256 15.3589 7.45431 15.2459 6.92725H7.8948V10.0708H12.2097C12.1228 10.852 11.653 12.0285 10.609 12.8191L10.5944 12.9244L12.9187 14.8724L13.0797 14.8898C14.5586 13.4121 15.4112 11.2379 15.4112 8.65904Z", fill: "#4285F4" }),
        React.createElement("path", { d: "M7.8948 16.9416C10.0087 16.9416 11.7834 16.1886 13.0797 14.8898L10.609 12.8191C9.94788 13.3179 9.06051 13.6662 7.8948 13.6662C5.82433 13.6662 4.06704 12.1885 3.44061 10.1461L3.3488 10.1546L0.931977 12.1781L0.900371 12.2732C2.18789 15.0403 4.83254 16.9416 7.8948 16.9416Z", fill: "#34A853" }),
        React.createElement("path", { d: "M3.44085 10.1461C3.27557 9.61904 3.17991 9.05428 3.17991 8.47076C3.17991 7.88718 3.27557 7.32248 3.43216 6.79542L3.42778 6.68317L0.980675 4.62708L0.90061 4.66828C0.369963 5.81656 0.0654764 7.10603 0.0654764 8.47076C0.0654764 9.8355 0.369963 11.1249 0.90061 12.2732L3.44085 10.1461Z", fill: "#FBBC05" }),
        React.createElement("path", { d: "M7.8948 3.27535C9.36499 3.27535 10.3567 3.96243 10.9222 4.5366L13.1319 2.20241C11.7748 0.837672 10.0087 0 7.8948 0C4.83254 0 2.18789 1.90121 0.900371 4.66832L3.43192 6.79546C4.06704 4.75306 5.82433 3.27535 7.8948 3.27535Z", fill: "#EB4335" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0_1_260" },
            React.createElement("rect", { width: "15.3548", height: "17", fill: "white", transform: "translate(0.0644455)" }))))); };

var GoogleButton = function (_a) {
    var typography = _a.typography, backgroundColor = _a.backgroundColor, buttonTypes = _a.buttonTypes, children = _a.children, color = _a.color, fontSize = _a.fontSize, height = _a.height, margin = _a.margin, onClick = _a.onClick, variant = _a.variant, width = _a.width;
    return (React__default.createElement(Button, { typography: typography, width: width, height: height, fontSize: fontSize, backgroundColor: backgroundColor, color: color, onClick: onClick, icon: React__default.createElement(GoogleSvg, null), buttonTypes: buttonTypes, margin: margin, variant: variant }, children));
};

var SeatSvg = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "mdi-car-seat", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M7 18C7 18 4 10 4 6S6 2 6 2H7C7 2 8 2 8 3S7 4 7 6 10 10 10 13 7 18 7 18M12 17C11 17 8 19.5 8 19.5C7.7 19.7 7.8 20 8 20.3C8 20.3 9 22.1 11 22.1H17C18.1 22.1 19 21.2 19 20.1V19.1C19 18 18.1 17.1 17 17.1H12Z" }))); };

var useMovieHallBadgeText = function () {
    var t = useTranslation().t;
    return {
        movieBadgeHallTitle: t("Movie.movieBadgeHallTitle"),
        availableSeatsText: t("Movie.availableSeats"),
        noAvailableSeats: t("Movie.noAvailableSeats"),
    };
};

var MovieHallBadgeWrapperWidthPercent = 31;
var MovieHallBadgeWrapperWidthPercentM = 100;
var SeatSvgHeight = 20;
var MovieHallBadgeWrapper = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  width: ", "%;\n  max-width: fit-content;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n  padding: 10px;\n\n  @media (max-width: ", ") {\n    width: ", "%;\n    max-width: ", "%;\n    margin-bottom: 10px;\n  }\n"], ["\n  width: ", "%;\n  max-width: fit-content;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n  padding: 10px;\n\n  @media (max-width: ", ") {\n    width: ", "%;\n    max-width: ", "%;\n    margin-bottom: 10px;\n  }\n"])), MovieHallBadgeWrapperWidthPercent, function (_a) {
    var theme = _a.theme;
    return theme.colors.extraDarkGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[20];
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return isActive
        ? "solid 3px ".concat(theme.colors.secondary)
        : "solid 3px ".concat(theme.colors.extraDarkGray);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.breakPoints.m, "px");
}, MovieHallBadgeWrapperWidthPercentM, MovieHallBadgeWrapperWidthPercentM);
var MovieHallBadgeTime = styled.h3(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n"], ["\n  ", ";\n  font-size: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.poppins_sb;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[14];
});
var MovieHallBadgeNumber = styled.h4(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n"], ["\n  ", ";\n  font-size: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.poppins_r;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[14];
});
var MovieHallBadgeSeats = styled.p(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  ", ";\n  svg {\n    margin-right: 5px;\n    height: ", "px;\n    width: auto;\n  }\n  svg path {\n    fill: ", ";\n  }\n"], ["\n  ", ";\n  font-size: ", ";\n  ", ";\n  svg {\n    margin-right: 5px;\n    height: ", "px;\n    width: auto;\n  }\n  svg path {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.poppins_l;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[10];
}, function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
}, SeatSvgHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1$4, templateObject_2$3, templateObject_3$3, templateObject_4$2;

var MovieHallBadge = function (_a) {
    var isActive = _a.isActive, time = _a.time, hallNumber = _a.hallNumber, available = _a.available, onClick = _a.onClick;
    var _b = useMovieHallBadgeText(), movieBadgeHallTitle = _b.movieBadgeHallTitle, availableSeatsText = _b.availableSeatsText;
    return (React__default.createElement(MovieHallBadgeWrapper, { isActive: isActive, onClick: onClick },
        React__default.createElement(MovieHallBadgeTime, null, time),
        React__default.createElement(MovieHallBadgeNumber, null,
            movieBadgeHallTitle,
            ": ",
            hallNumber),
        React__default.createElement(MovieHallBadgeSeats, null,
            React__default.createElement(SeatSvg, null),
            available,
            " ",
            availableSeatsText)));
};

/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$1.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$1({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
new Set([301, 302, 303, 307, 308]);
new Set([307, 308]);

/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

const DataRouterContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/React.createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return React.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return React.useContext(LocationContext).location;
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered."; // Mute warnings for calls to useNavigate in SSR environments

function useIsomorphicLayoutEffect(cb) {
  let isStatic = React.useContext(NavigationContext).static;

  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(cb);
  }
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */


function useNavigate() {
  let isDataRouter = React.useContext(DataRouterContext) != null; // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return isDataRouter ? useNavigateStable() : useNavigateUnstable();
}

function useNavigateUnstable() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React.useContext(NavigationContext);
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? warning(activeRef.current, navigateEffectWarning) : void 0; // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet

    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return ctx;
}

function useRouteContext(hookName) {
  let route = React.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return route;
} // Internal version with hookName-aware debugging


function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, hookName + " can only be used on routes that contain a unique \"id\"") : invariant(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */

function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? warning(activeRef.current, navigateEffectWarning) : void 0; // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet

    if (!activeRef.current) return;

    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

new Promise(() => {});

var AppPathes;
(function (AppPathes) {
    AppPathes["MAIN"] = "/";
    AppPathes["MOVIE"] = "/movies/:id";
    AppPathes["BOOKING"] = "/bookings";
    AppPathes["PROFILE"] = "/profile/:id";
    AppPathes["NOT_FOUND"] = "/not-found";
})(AppPathes || (AppPathes = {}));
var AppPathesWithoutSlug;
(function (AppPathesWithoutSlug) {
    AppPathesWithoutSlug["MOVIE"] = "/movies/";
    AppPathesWithoutSlug["PROFILE"] = "/profile/";
})(AppPathesWithoutSlug || (AppPathesWithoutSlug = {}));

var MovieSliderItemWrapperWidth = 68;
var MovieSliderItemWrapperHeight = 100;
var MovieSliderImgVerticalWidthPercent = 100;
var MovieSliderImgVerticalHeightPercent = 100;
var BookSliderItemSquareHW = {
    prevDirection: {
        width: "10%",
        height: "auto",
    },
    direction: {
        width: "11%",
        height: "auto",
    },
    center: {
        width: "13%",
        height: "auto",
    },
};
var MovieSliderItemWrapperVertical = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: 10px auto;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: 10px auto;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"])), MovieSliderItemWrapperWidth, MovieSliderItemWrapperHeight, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var top = _a.top, center = _a.center, bot = _a.bot;
    return top
        ? "translateY(0%) scale(0.8);"
        : center
            ? "translateY(110%) scale(1.1);"
            : bot
                ? "translateY(220%) scale(0.8);"
                : "translateY(310%) scale(0);";
}, function (_a) {
    var theme = _a.theme, center = _a.center;
    return (center ? theme.zIndex[100] : "0");
});
var MovieSliderImgVertical = styled.img(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  width: ", "%;\n  height: ", "%;\n  border-radius: ", ";\n"], ["\n  width: ", "%;\n  height: ", "%;\n  border-radius: ", ";\n"])), MovieSliderImgVerticalWidthPercent, MovieSliderImgVerticalHeightPercent, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
});
var MovieSliderImgHorizontal = styled.img(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n"], ["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var prevLeft = _a.prevLeft, prevRight = _a.prevRight, left = _a.left, right = _a.right;
    return prevRight || prevLeft
        ? BookSliderItemSquareHW.prevDirection.height
        : left || right
            ? BookSliderItemSquareHW.direction.height
            : BookSliderItemSquareHW.center.height;
}, function (_a) {
    var prevLeft = _a.prevLeft, prevRight = _a.prevRight, left = _a.left, right = _a.right;
    return prevRight || prevLeft
        ? BookSliderItemSquareHW.prevDirection.width
        : left || right
            ? BookSliderItemSquareHW.direction.width
            : BookSliderItemSquareHW.center.width;
}, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
});
var MovieSliderItemWrapperHorizontal = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: start;\n  margin: 10px auto;\n  width: 490px;\n  height: 200px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: start;\n  margin: 10px auto;\n  width: 490px;\n  height: 200px;\n  border-radius: ", ";\n  transform: ", ";\n  transition: 0.2s ease-out;\n  cursor: pointer;\n  zindex: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border_radius[10];
}, function (_a) {
    var left = _a.left, center = _a.center, right = _a.right, prevLeft = _a.prevLeft, prevRight = _a.prevRight;
    return prevLeft
        ? "translateX(3%)"
        : left
            ? "translateX(20%)"
            : center
                ? "translateX(40.5%)"
                : right
                    ? "translateX(63.5%)"
                    : prevRight
                        ? "translateX(83%)"
                        : "translateX(110%)";
}, function (_a) {
    var theme = _a.theme, center = _a.center;
    return center ? theme.zIndex[100] : theme.zIndex[0];
});
var templateObject_1$3, templateObject_2$2, templateObject_3$2, templateObject_4$1;

var MovieSliderItem = function (_a) {
    var center = _a.center, top = _a.top, bot = _a.bot, src = _a.src, id = _a.id, direction = _a.direction, left = _a.left, prevLeft = _a.prevLeft, prevRight = _a.prevRight, right = _a.right;
    var navigate = useNavigate();
    var handleId = function () {
        navigate("".concat(AppPathesWithoutSlug.MOVIE).concat(id));
    };
    return direction === SliderDirectionVariant.HORIZONTAL ? (React__default.createElement(MovieSliderItemWrapperHorizontal, { center: center, top: top, bot: bot, left: left, prevLeft: prevLeft, prevRight: prevRight, right: right, onClick: handleId },
        React__default.createElement(MovieSliderImgHorizontal, { src: src, center: center, prevLeft: prevLeft, prevRight: prevRight, left: left, right: right }))) : (React__default.createElement(MovieSliderItemWrapperVertical, { center: center, top: top, bot: bot, left: left, prevLeft: prevLeft, prevRight: prevRight, right: right, onClick: handleId },
        React__default.createElement(MovieSliderImgVertical, { src: src })));
};

var ArrowDownSvg = function (props) { return (React.createElement("svg", __assign({ width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M7.32204 19.7029C7.71041 20.0956 8.34356 20.0991 8.73623 19.7107L15.1352 13.382C15.5279 12.9936 15.5314 12.3604 15.143 11.9678C14.7546 11.5751 14.1215 11.5716 13.7288 11.96L8.04084 17.5855L2.41527 11.8976C2.02691 11.5049 1.39375 11.5014 1.00108 11.8898C0.608409 12.2781 0.604916 12.9113 0.993281 13.304L7.32204 19.7029ZM7.13234 0.994484L7.03305 18.9942L9.03302 19.0052L9.13231 1.00552L7.13234 0.994484Z", fill: "black" }))); };

var ArrowUpSvg = function (props) { return (React.createElement("svg", __assign({ width: "20px", height: "18px", viewBox: "0 0 20 18", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("title", null, "ic_upward"),
    React.createElement("desc", null, "Created with Sketch."),
    React.createElement("defs", null),
    React.createElement("g", { id: "Icons", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("g", { id: "24-px-Icons", transform: "translate(-266.000000, -27.000000)", stroke: "#000000" },
            React.createElement("g", { id: "ic_upward", transform: "translate(264.000000, 24.000000)" },
                React.createElement("g", { transform: "translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ", id: "ic_back" },
                    React.createElement("g", { transform: "translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ", strokeWidth: "2" },
                        React.createElement("g", { id: "forward", transform: "translate(4.000000, 3.000000)" },
                            React.createElement("path", { d: "M0,9 L16,9", id: "Line" }),
                            React.createElement("path", { d: "M16,9 L7.93774223,0.937742233", id: "Line" }),
                            React.createElement("path", { d: "M16,9 L7.93774223,17.0622578", id: "Line" }))))))))); };

var styledRoundButtonSVGWidthPercent = 50;
var styledRoundButtonSVGHeightPercent = 50;
var StyledRoundButton = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  padding: 5px;\n  ", ";\n  justify-content: center;\n  &:hover {\n    ", "\n  }\n  svg {\n    width: ", "%;\n    height: ", ";\n  }\n  svg line {\n    stroke: ", ";\n  }\n\n  svg path {\n    fill: ", ";\n  }\n  cursor: pointer;\n  color: ", ";\n  ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  padding: 5px;\n  ", ";\n  justify-content: center;\n  &:hover {\n    ", "\n  }\n  svg {\n    width: ", "%;\n    height: ", ";\n  }\n  svg line {\n    stroke: ", ";\n  }\n\n  svg path {\n    fill: ", ";\n  }\n  cursor: pointer;\n  color: ", ";\n  ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "36px";
}, function (_a) {
    var height = _a.height;
    return height || "36px";
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background || theme.colors.secondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.border_radius.circle;
}, function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
}, function (_a) {
    var theme = _a.theme;
    return theme.hover;
}, styledRoundButtonSVGWidthPercent, styledRoundButtonSVGHeightPercent, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var extra = _a.extra;
    return extra;
});
var templateObject_1$2;

var RoundButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, background = _a.background, color = _a.color, height = _a.height, width = _a.width, extra = _a.extra;
    return (React__default.createElement(StyledRoundButton, { onClick: onClick, width: width, height: height, background: background, color: color, extra: extra }, children));
};

var readMoreRoundBtnExtraStyles = "svg path {fill: black}";
var textLimit = 380;

var handleReviewText = function (initialStr, limit) {
    var sliceTo = limit;
    if (initialStr.length < sliceTo) {
        sliceTo = initialStr.length;
        return initialStr.slice(0, sliceTo);
    }
    return initialStr.slice(0, sliceTo) + "...";
};

var useReviewText = function () {
    var t = useTranslation().t;
    return {
        title: t("Review.title"),
        from: t("Review.from"),
        readMore: t("Review.readMore"),
        hide: t("Review.hide"),
    };
};

var ReviewWrapperWidthPercent = 30;
var ReviewWrapperWidthPercentL = 100;
var ReviewWrapperHeight = 400;
var ReviewWrapperMaxWidth = 320;
var ReviewWrapper = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: ", "%;\n  max-width: ", "px;\n  min-height: ", "px;\n  filter: drop-shadow(15px 15px 50px #000000);\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  padding: 30px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (max-width: ", ") {\n    width: ", "%;\n    max-width: 100%;\n    min-height: 0px;\n    margin-bottom: 20px;\n  }\n"], ["\n  width: ", "%;\n  max-width: ", "px;\n  min-height: ", "px;\n  filter: drop-shadow(15px 15px 50px #000000);\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n  padding: 30px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (max-width: ", ") {\n    width: ", "%;\n    max-width: 100%;\n    min-height: 0px;\n    margin-bottom: 20px;\n  }\n"])), ReviewWrapperWidthPercent, ReviewWrapperMaxWidth, ReviewWrapperHeight, function (_a) {
    var theme = _a.theme;
    return theme.border_radius[20];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.regularGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.breakPoints.l, "px");
}, ReviewWrapperWidthPercentL);
var ReviewInfo = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  scrollbar-width: none;\n"], ["\n  scrollbar-width: none;\n"])));
var ReviewTitle = styled.h3(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  ", ";\n  text-transform: uppercase;\n  font-size: ", ";\n  text-align: center;\n"], ["\n  ", ";\n  text-transform: uppercase;\n  font-size: ", ";\n  text-align: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.nunito_r;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[24];
});
var ReviewFrom = styled.h4(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  text-align: center;\n  margin-bottom: ", ";\n"], ["\n  ", ";\n  font-size: ", ";\n  text-align: center;\n  margin-bottom: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.nunito_l;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[14];
}, function (_a) {
    var theme = _a.theme;
    return theme.margin.mb20;
});
var ReviewText = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  margin-bottom: ", ";\n  max-height: ", ";\n  overflow-y: ", ";\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none;\n  transition: max-height linear 0.4s;\n"], ["\n  ", ";\n  font-size: ", ";\n  margin-bottom: ", ";\n  max-height: ", ";\n  overflow-y: ", ";\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none;\n  transition: max-height linear 0.4s;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.nunito_l_ital;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[14];
}, function (_a) {
    var theme = _a.theme;
    return theme.margin.mb20;
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "400px" : "230px");
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "scroll" : "hidden");
});
var ReadMoreWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  flex-direction: column;\n"], ["\n  ", ";\n  flex-direction: column;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
});
var ReadMoreTitle = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  color: ", ";\n  margin-bottom: ", ";\n  cursor: pointer;\n  &:hover {\n    ", "\n  }\n"], ["\n  ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  color: ", ";\n  margin-bottom: ", ";\n  cursor: pointer;\n  &:hover {\n    ", "\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.typography.nunito_l;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize[14];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.margin.mb10;
}, function (_a) {
    var theme = _a.theme;
    return theme.hover;
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

var Review = function (_a) {
    var author = _a.author, text = _a.text;
    var _b = useReviewText(), from = _b.from, readMore = _b.readMore, title = _b.title, hide = _b.hide;
    var _c = useState(false), isMoreOpen = _c[0], setIsMoreOpen = _c[1];
    var onReadMoreClick = function () {
        setIsMoreOpen(function (prev) { return !prev; });
    };
    return (React__default.createElement(ReviewWrapper, null,
        React__default.createElement(ReviewInfo, null,
            React__default.createElement(ReviewTitle, null, title),
            React__default.createElement(ReviewFrom, null,
                from,
                " ",
                author),
            React__default.createElement(ReviewText, { isOpen: isMoreOpen }, isMoreOpen ? text : handleReviewText(text, textLimit))),
        React__default.createElement(ReadMoreWrapper, null,
            React__default.createElement(ReadMoreTitle, { onClick: onReadMoreClick }, isMoreOpen ? hide : readMore),
            React__default.createElement(RoundButton, { onClick: onReadMoreClick, extra: readMoreRoundBtnExtraStyles }, isMoreOpen ? React__default.createElement(ArrowUpSvg, null) : React__default.createElement(ArrowDownSvg, null)))));
};

var DownSvg = function (props) { return (React.createElement("svg", __assign({ width: "22", height: "32", viewBox: "0 0 22 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M0.999999 19L11 31L21 19M1 0.999999L11 13L21 1", stroke: "#FEFEFE", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))); };

var UpSvg = function (props) { return (React.createElement("svg", __assign({ width: "22", height: "32", viewBox: "0 0 22 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M21 13L11 1L0.999999 13M21 31L11 19L1 31", stroke: "#FEFEFE", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))); };

var KeyButtonVariant;
(function (KeyButtonVariant) {
    KeyButtonVariant["ARROW_DOWN"] = "ArrowDown";
    KeyButtonVariant["ARROW_UP"] = "ArrowUp";
    KeyButtonVariant["ARROW_LEFT"] = "ArrowLeft";
    KeyButtonVariant["ARROW_RIGHT"] = "ArrowRight";
    KeyButtonVariant["SPACE"] = " ";
    KeyButtonVariant["M"] = "m";
    KeyButtonVariant["F"] = "f";
    KeyButtonVariant["AngleBracketRight"] = ">";
    KeyButtonVariant["AngleBracketLeft"] = "<";
})(KeyButtonVariant || (KeyButtonVariant = {}));

var SliderWrapperSvgHeight = 16;
var SliderWrapperHorizontalSvgHeight = 28;
var SliderItemsVerticalWidth = 100;
var SliderItemsHorizontalWidth = 500;
var SliderItemsVerticalHeight = 330;
var SliderItemsHorizontalHeight = 106;
var SliderWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  svg {\n    height: ", ";\n    width: auto;\n    cursor: pointer;\n    transition: 0.2s linear;\n  }\n  svg:first-of-type {\n    margin-bottom: ", ";\n    transform: ", ";\n  }\n  svg:nth-of-type(2) {\n    transform: ", ";\n  }\n  svg:hover {\n    transform: ", ";\n  }\n  svg path {\n    stroke: ", ";\n  }\n"], ["\n  ", ";\n\n  svg {\n    height: ", ";\n    width: auto;\n    cursor: pointer;\n    transition: 0.2s linear;\n  }\n  svg:first-of-type {\n    margin-bottom: ", ";\n    transform: ", ";\n  }\n  svg:nth-of-type(2) {\n    transform: ", ";\n  }\n  svg:hover {\n    transform: ", ";\n  }\n  svg path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.VERTICAL
        ? "".concat(SliderWrapperSvgHeight, "px")
        : "".concat(SliderWrapperHorizontalSvgHeight, "px");
}, function (_a) {
    var theme = _a.theme, direction = _a.direction;
    return direction === SliderDirectionVariant.VERTICAL
        ? theme.margin.mb10
        : "0px";
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL && "rotate(-90deg)";
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL && "rotate(-90deg)";
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL
        ? "rotate(-90deg) scale(1.1)"
        : "scale(1.1)";
}, function (_a) {
    var theme = _a.theme, direction = _a.direction;
    return direction === SliderDirectionVariant.VERTICAL
        ? theme.colors.primary
        : theme.colors.lightGray;
});
var SliderItemsWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  flex-direction: ", ";\n  margin-right: 30px;\n  margin-left: ", ";\n  width: ", ";\n  height: ", ";\n  position: relative;\n  overflow: hidden;\n\n  @media (max-width: ", ") {\n    width: ", "\n"], ["\n  ", ";\n  flex-direction: ", ";\n  margin-right: 30px;\n  margin-left: ", ";\n  width: ", ";\n  height: ", ";\n  position: relative;\n  overflow: hidden;\n\n  @media (max-width: ", ") {\n    width: ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL ? "row" : "column";
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL ? "30px" : "0px";
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL
        ? "".concat(SliderItemsHorizontalWidth, "px")
        : "".concat(SliderItemsVerticalWidth, "px");
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL
        ? "".concat(SliderItemsHorizontalHeight, "px")
        : "".concat(SliderItemsVerticalHeight, "px");
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.breakPoints.m, "px");
}, function (_a) {
    var direction = _a.direction;
    return direction === SliderDirectionVariant.HORIZONTAL && "400px;";
});
var SliderControls = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  flex-direction: column;\n"], ["\n  ", ";\n  flex-direction: column;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexAlignCenter;
});
var templateObject_1, templateObject_2, templateObject_3;

var Slider = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? SliderDirectionVariant.VERTICAL : _b, index = _a.index, setIndex = _a.setIndex, children = _a.children, data = _a.data;
    var dataLength = data.length;
    var prevSlide = function () {
        if (index > 0) {
            setIndex((index - 1) % dataLength);
        }
        else {
            setIndex(dataLength - 1);
        }
    };
    var nextSlide = function () {
        if (index > dataLength + 1) {
            setIndex(0);
        }
        else {
            setIndex((index + 1) % dataLength);
        }
    };
    var keyDownHandler = function (e) {
        e.preventDefault();
        if (direction === SliderDirectionVariant.VERTICAL) {
            if (e.key === KeyButtonVariant.ARROW_DOWN) {
                nextSlide();
            }
            if (e.key === KeyButtonVariant.ARROW_UP) {
                prevSlide();
            }
        }
        if (direction === SliderDirectionVariant.HORIZONTAL) {
            if (e.key === KeyButtonVariant.ARROW_RIGHT) {
                nextSlide();
            }
            if (e.key === KeyButtonVariant.ARROW_LEFT) {
                prevSlide();
            }
        }
    };
    var onMouseWheel = function (e) {
        if (e.deltaY > 0) {
            nextSlide();
        }
        if (e.deltaY < 0) {
            prevSlide();
        }
    };
    return (React__default.createElement(SliderWrapper, { onKeyDown: keyDownHandler, tabIndex: 0, onWheel: onMouseWheel, direction: direction },
        direction === SliderDirectionVariant.HORIZONTAL && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(UpSvg, { onClick: prevSlide }),
            React__default.createElement(SliderItemsWrapper, { direction: direction }, children),
            React__default.createElement(DownSvg, { onClick: nextSlide }))),
        direction === SliderDirectionVariant.VERTICAL && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(SliderItemsWrapper, { direction: direction }, children),
            React__default.createElement(SliderControls, null,
                React__default.createElement(UpSvg, { onClick: prevSlide }),
                React__default.createElement(DownSvg, { onClick: nextSlide }))))));
};

var SliderItems = function (_a) {
    var data = _a.data, index = _a.index, renderItem = _a.renderItem;
    var dataLength = data.length;
    var mod = function (n, m) {
        var result = n % m;
        return result >= 0 ? result : result + m;
    };
    return (React__default.createElement(React__default.Fragment, null, data === null || data === void 0 ? void 0 : data.map(function (item, idx) {
        var indexTop = mod(index - 1, dataLength);
        var indexDown = mod(index + 1, dataLength);
        var indexLeft = mod(index - 1, dataLength);
        var indexRight = mod(index + 1, dataLength);
        var indexPrevLeft = mod(index - 2, dataLength);
        var indexPrevRight = mod(index + 2, dataLength);
        var top = idx === indexTop;
        var center = idx === index;
        var bot = idx === indexDown;
        var left = idx === indexLeft;
        var right = idx === indexRight;
        var prevLeft = idx === indexPrevLeft;
        var prevRight = idx === indexPrevRight;
        return renderItem(item, top, center, bot, left, right, prevLeft, prevRight);
    })));
};

export { BookSliderItem, Button, Chip, Divider, FacebookButton, GithubButton, GoogleButton, MovieHallBadge, MovieSliderItem, Review, RoundButton, Slider, SliderItems };
