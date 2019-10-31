"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Table;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Table(props) {
  if (props.data && props.data['_fields'] && props.data['rows']) return _react["default"].createElement(_core.Table, null, _react["default"].createElement(_core.TableHead, null, _react["default"].createElement(_core.TableRow, null, props.data._fields.map(function (field) {
    return _react["default"].createElement(_core.TableCell, null, field);
  }))), _react["default"].createElement(_core.TableBody, null, props.data.rows.map(function (row) {
    return _react["default"].createElement(_core.TableRow, null, props.data._fields.map(function (field) {
      return _react["default"].createElement(_core.TableCell, null, row[field]);
    }));
  })));else {
    return _react["default"].createElement(_core.Typography, null, "Invalid data type. Expected TableLike data to get passed to the visualization.");
  }
}
