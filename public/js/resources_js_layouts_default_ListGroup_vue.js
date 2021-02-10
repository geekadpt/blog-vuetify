(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_default_ListGroup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/ListGroup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/ListGroup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Utilities
//import { get } from 'vuex-pathify'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DefaultListGroup',
  components: {
    DefaultListItem: function DefaultListItem() {
      return __webpack_require__.e(/*! import() */ "resources_js_layouts_default_ListItem_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ListItem */ "./resources/js/layouts/default/ListItem.vue"));
    }
  },
  props: {
    item: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    gradient: function gradient() {
      return this.$store.getters.getPersonal.gradients;
    },
    group: function group() {
      return this.genGroup(this.item.items);
    },
    title: function title() {
      var matches = this.item.title.match(/\b(\w)/g);
      return matches.join('');
    }
  },
  methods: {
    genGroup: function genGroup(items) {
      var _this = this;

      return items.reduce(function (acc, cur) {
        if (!cur.to) return acc;
        acc.push(cur.items ? _this.genGroup(cur.items) : cur.to.slice(1, -1));
        return acc;
      }, []).join('|');
    }
  }
});

/***/ }),

/***/ "./resources/js/layouts/default/ListGroup.vue":
/*!****************************************************!*\
  !*** ./resources/js/layouts/default/ListGroup.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListGroup_vue_vue_type_template_id_8a736e02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=template&id=8a736e02& */ "./resources/js/layouts/default/ListGroup.vue?vue&type=template&id=8a736e02&");
/* harmony import */ var _ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=script&lang=js& */ "./resources/js/layouts/default/ListGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListGroup_vue_vue_type_template_id_8a736e02___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListGroup_vue_vue_type_template_id_8a736e02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/default/ListGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/default/ListGroup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/default/ListGroup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/ListGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/default/ListGroup.vue?vue&type=template&id=8a736e02&":
/*!***********************************************************************************!*\
  !*** ./resources/js/layouts/default/ListGroup.vue?vue&type=template&id=8a736e02& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_8a736e02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_8a736e02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_8a736e02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListGroup.vue?vue&type=template&id=8a736e02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/ListGroup.vue?vue&type=template&id=8a736e02&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/ListGroup.vue?vue&type=template&id=8a736e02&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/ListGroup.vue?vue&type=template&id=8a736e02& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list-group",
    _vm._b(
      {
        attrs: {
          color: _vm.gradient !== 1 ? "white" : undefined,
          group: _vm.group,
          "prepend-icon": _vm.item.icon,
          eager: ""
        },
        scopedSlots: _vm._u([
          {
            key: "activator",
            fn: function() {
              return [
                !_vm.item.icon && !_vm.item.avatar
                  ? _c(
                      "v-list-item-icon",
                      {
                        staticClass:
                          "text-caption text-uppercase text-center my-2 align-self-center",
                        staticStyle: { "margin-top": "14px" }
                      },
                      [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.item.avatar
                  ? _c(
                      "v-list-item-avatar",
                      [_c("v-img", { attrs: { src: _vm.item.avatar } })],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.item.title
                  ? _c(
                      "v-list-item-content",
                      [
                        _c("v-list-item-title", {
                          domProps: { textContent: _vm._s(_vm.item.title) }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]
            },
            proxy: true
          }
        ])
      },
      "v-list-group",
      _vm.$attrs,
      false
    ),
    [
      _vm._v(" "),
      _vm._l(_vm.item.items, function(child, i) {
        return [
          child.items
            ? _c("default-list-group", {
                key: "sub-group-" + i,
                attrs: { item: child }
              })
            : _vm._e(),
          _vm._v(" "),
          !child.items
            ? _c("default-list-item", {
                key: "child-" + i,
                attrs: { item: child }
              })
            : _vm._e()
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);