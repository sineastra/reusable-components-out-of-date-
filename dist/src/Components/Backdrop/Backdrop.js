"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _backdropModule = _interopRequireDefault(require("./backdrop.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * Backdrop parameters

 * @param {Object} _ref

 * @param {Function} _ref.click - onClick callback 

 */
function Backdrop(_ref) {
  var children = _ref.children,
      click = _ref.click;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _backdropModule.default.backdrop,
    onClick: click
  }, children);
}

var _default = Backdrop;
exports.default = _default;

//# sourceMappingURL=Backdrop.js.map