"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExampleComponent;

var _react = _interopRequireDefault(require("react"));

var _exampleComponentModule = _interopRequireDefault(require("./exampleComponent.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExampleComponent() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
    className: _exampleComponentModule.default.headOne
  }, "I AM AN EXAMPLE"));
}

//# sourceMappingURL=ExampleComponent.js.map