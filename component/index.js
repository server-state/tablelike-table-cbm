"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Table;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Table(props) {
  if (props.data && props.data['_fields'] && props.data['rows']) return _react["default"].createElement(_core.Table, null, _react["default"].createElement(_core.TableHead, null, _react["default"].createElement(_core.TableRow, null, props.data._fields.map(function (field) {
    return _react["default"].createElement(_core.TableCell, {
      key: field
    }, field);
  }))), _react["default"].createElement(_core.TableBody, null, props.data.rows.map(function (row, index) {
    return _react["default"].createElement(_core.TableRow, {
      key: index
    }, props.data._fields.map(function (field) {
      return _react["default"].createElement(_core.TableCell, {
        key: field
      }, row[field]);
    }));
  })));else {
    return _react["default"].createElement(_core.Typography, null, "Invalid data type. Expected TableLike data to get passed to the visualization.");
  }
}

Table.propTypes = {
  data: _propTypes["default"].shape({
    _fields: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
    rows: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
  }).isRequired,
  onRegisterAction: _propTypes["default"].func,
  onRefresh: _propTypes["default"].func
};
