module.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@material-ui/core")},function(e,t){e.exports=require("prop-types")},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(1),l=r(2),u=r.n(l);function i(e){return e.data&&e.data._fields&&e.data.rows?n.a.createElement(o.Table,null,n.a.createElement(o.TableHead,null,n.a.createElement(o.TableRow,null,e.data._fields.map((function(e){return n.a.createElement(o.TableCell,{key:e},e)})))),n.a.createElement(o.TableBody,null,e.data.rows.map((function(t,r){return n.a.createElement(o.TableRow,{key:r},e.data._fields.map((function(e){return n.a.createElement(o.TableCell,{key:e},t[e])})))})))):n.a.createElement(o.Typography,null,"Invalid data type. Expected TableLike data to get passed to the visualization.")}i.propTypes={data:u.a.shape({_fields:u.a.arrayOf(u.a.string).isRequired,rows:u.a.arrayOf(u.a.object).isRequired}).isRequired,onRegisterAction:u.a.func,onRefresh:u.a.func};t.default={info:{name:"@server-state/tablelike-table-cbm",about:"A table visualization for the table-like standard DF",version:"0.1.2"},component:i}}]);