(self["webpackChunk"] = self["webpackChunk"] || []).push([["default-account"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/widgets/Account.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/widgets/Account.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../event-bus */ "./resources/js/event-bus.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DefaultAccount',
  data: function data() {
    return {
      profile: [{
        title: 'Profile'
      }, {
        title: 'Settings'
      }, {
        divider: true
      }, {
        title: 'Log out'
      }]
    };
  },
  computed: {
    user: function user() {
      console.log(this.$store.getters.getMyInfo);
      return this.$store.getters.getMyInfo;
    }
  },
  methods: {
    func: function func(i) {
      console.log(i);

      switch (i) {
        case 1:
          break;

        case 2:
          break;

        case 3:
          console.log('sss');
          this.$store.dispatch('logout');
          this.$watch(this.$store.getters.getLogoutStatus, function () {
            if (this.$store.getters.getLogoutStatus() === 2) {
              this.$store.dispatch('clearLoginStatus'); // this.$router.push({name:'首页'});
            }

            if (this.$store.getters.getLogoutStatus() === 3) {
              this.$store.dispatch('clearLoginStatus');
              _event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus.$emit('open-message', {
                text: this.$store.getters.getLogoutErrors
              });
            }
          });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/layouts/default/widgets/Account.vue":
/*!**********************************************************!*\
  !*** ./resources/js/layouts/default/widgets/Account.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Account_vue_vue_type_template_id_b43e666a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=b43e666a& */ "./resources/js/layouts/default/widgets/Account.vue?vue&type=template&id=b43e666a&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./resources/js/layouts/default/widgets/Account.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Account_vue_vue_type_template_id_b43e666a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Account_vue_vue_type_template_id_b43e666a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/default/widgets/Account.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/default/widgets/Account.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/layouts/default/widgets/Account.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/widgets/Account.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/default/widgets/Account.vue?vue&type=template&id=b43e666a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/layouts/default/widgets/Account.vue?vue&type=template&id=b43e666a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_b43e666a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_b43e666a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_b43e666a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=template&id=b43e666a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/widgets/Account.vue?vue&type=template&id=b43e666a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/widgets/Account.vue?vue&type=template&id=b43e666a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/default/widgets/Account.vue?vue&type=template&id=b43e666a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "px-2" },
    [
      _vm.user
        ? _c(
            "v-menu",
            {
              attrs: {
                bottom: "",
                left: "",
                "min-width": "200",
                "offset-y": "",
                origin: "top right",
                transition: "scale-transition"
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "activator",
                    fn: function(ref) {
                      var attrs = ref.attrs
                      var on = ref.on
                      return [
                        !_vm.user.avatar
                          ? _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  {
                                    staticClass: "ml-2",
                                    attrs: { "min-width": "0", text: "" }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [
                                _c(
                                  "span",
                                  { staticClass: "text--darken-1 headline " },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.user.nickname.substr(0, 1))
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.user.avatar
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "mx-2",
                                attrs: {
                                  fab: "",
                                  dark: "",
                                  small: "",
                                  color: "dark"
                                }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  _vm._g(
                                    _vm._b(
                                      { attrs: { text: "", size: "34px" } },
                                      "v-avatar",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.user.avatar,
                                        alt: _vm.user.nickname.substr(0, 1)
                                      }
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    }
                  }
                ],
                null,
                false,
                98694392
              )
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { tile: false, flat: "", nav: "" } },
                [
                  _vm._l(_vm.profile, function(p, i) {
                    return [
                      p.divider
                        ? _c("v-divider", {
                            key: "divider-" + i,
                            staticClass: "mb-2 mt-2"
                          })
                        : _c(
                            "v-list-item",
                            {
                              key: "item-" + i,
                              attrs: { to: "/" },
                              on: {
                                click: function($event) {
                                  return _vm.func(i)
                                }
                              }
                            },
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s(p.title) }
                              })
                            ],
                            1
                          )
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.user
        ? _c(
            "router-link",
            { attrs: { to: { name: "登录" } } },
            [
              _c(
                "v-btn",
                { staticClass: "ml-2", attrs: { "min-width": "0", text: "" } },
                [
                  _c("v-icon", { attrs: { dark: "" } }, [
                    _vm._v(
                      "\n                    mdi-account\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);