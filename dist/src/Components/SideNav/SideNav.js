"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SideNav;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _sideNavModule = _interopRequireDefault(require("./sideNav.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * SideNav properties

 * @param {Object} _ref

 * @param {boolean} _ref.show - show or hide element.

 * @param {Array<Array<{linkText: string, linkHref: string, 'className - Optional': string}>>} _ref.linksData - Array of arrays with link data [0: linkText, 1: linkHref, 2: className]

 */
function SideNav(_ref) {
  var show = _ref.show,
      linksData = _ref.linksData;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("div", {
    className: show ? _sideNavModule.default["wrapper-open"] : _sideNavModule.default.wrapper
  }, linksData ? linksData.map(function (x) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      key: x[0],
      to: x[1],
      className: x[2]
    }, x[0]);
  }) : null)));
}

//# sourceMappingURL=SideNav.js.map