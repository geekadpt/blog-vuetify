(self["webpackChunk"] = self["webpackChunk"] || []).push([["default-tag-s"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/widgets/TagCloud.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/widgets/TagCloud.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TagCloud',
  data: function data() {
    return {
      width: 300,
      height: 300,
      tagsNum: 40,
      RADIUS: 200,
      speedX: Math.PI / 360,
      speedY: Math.PI / 360,
      tags: []
    };
  },
  computed: {
    // tags(){
    //     return this.$store.getters.getTags
    // },
    CX: function CX() {
      return this.width / 2;
    },
    CY: function CY() {
      return this.height / 2;
    }
  },
  created: function created() {
    //初始化标签位置
    this.$store.dispatch('indexTags');
    var tags = [];

    for (var i = 0; i < this.tagsNum; i++) {
      var tag = {};
      var k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
      var a = Math.acos(k);
      var b = a * Math.sqrt(this.tagsNum * Math.PI);
      tag.text = i + 'tag';
      tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
      tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
      tag.z = this.RADIUS * Math.cos(a);
      tag.href = 'https://imgss.github.io';
      tag.color = 'blue';
      tags.push(tag);
    }

    this.tags = tags;
    this.$watch(function () {
      // 第一个函数就是处理你要监听的属性，只要将其return出去就行
      return this.$store.getters.getTagsLoadStatus();
    }, function (old, valold) {
      if (this.$store.getters.getArticlesLoadStatus() == 2) {
        var temp = this.$store.getters.getTags;

        for (var _i = 0; _i < this.tagsNum; _i++) {
          if (temp[_i]) {
            tags[_i].text = temp[_i].name;
            tags[_i].color = temp[_i].color;
          }
        }
      }
    });
  },
  mounted: function mounted() {
    var _this = this;

    //使球开始旋转
    setInterval(function () {
      _this.rotateX(_this.speedX);

      _this.rotateY(_this.speedY);
    }, 17);
  },
  methods: {
    rotateX: function rotateX(speedX) {
      var cos = Math.cos(speedX);
      var sin = Math.sin(speedX);

      var _iterator = _createForOfIteratorHelper(this.tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
          var z1 = tag.z * cos + (tag.y - this.CY) * sin;
          tag.y = y1;
          tag.z = z1;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    rotateY: function rotateY(speedY) {
      var cos = Math.cos(speedY);
      var sin = Math.sin(speedY);

      var _iterator2 = _createForOfIteratorHelper(this.tags),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tag = _step2.value;
          var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
          var z1 = tag.z * cos + (tag.x - this.CX) * sin;
          tag.x = x1;
          tag.z = z1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    listener: function listener(event) {
      //响应鼠标移动
      var x = event.clientX - this.CX;
      var y = event.clientY - this.CY;
      this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
      this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/widgets/TagCloud.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/widgets/TagCloud.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TagCloud_vue_vue_type_template_id_9da6e48c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagCloud.vue?vue&type=template&id=9da6e48c& */ "./resources/js/views/widgets/TagCloud.vue?vue&type=template&id=9da6e48c&");
/* harmony import */ var _TagCloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagCloud.vue?vue&type=script&lang=js& */ "./resources/js/views/widgets/TagCloud.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TagCloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TagCloud_vue_vue_type_template_id_9da6e48c___WEBPACK_IMPORTED_MODULE_0__.render,
  _TagCloud_vue_vue_type_template_id_9da6e48c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/widgets/TagCloud.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/widgets/TagCloud.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/widgets/TagCloud.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagCloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagCloud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/widgets/TagCloud.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagCloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/widgets/TagCloud.vue?vue&type=template&id=9da6e48c&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/widgets/TagCloud.vue?vue&type=template&id=9da6e48c& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagCloud_vue_vue_type_template_id_9da6e48c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagCloud_vue_vue_type_template_id_9da6e48c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagCloud_vue_vue_type_template_id_9da6e48c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagCloud.vue?vue&type=template&id=9da6e48c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/widgets/TagCloud.vue?vue&type=template&id=9da6e48c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/widgets/TagCloud.vue?vue&type=template&id=9da6e48c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/widgets/TagCloud.vue?vue&type=template&id=9da6e48c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: { width: "100%", height: _vm.height },
      on: {
        mousemove: function($event) {
          return _vm.listener($event)
        }
      }
    },
    _vm._l(_vm.tags, function(tag) {
      return _c("a", [
        _c(
          "text",
          {
            attrs: {
              color: tag.color,
              x: tag.x,
              y: tag.y,
              "font-size": 15 * (600 / (600 - tag.z)),
              "fill-opacity": (400 + tag.z) / 600
            }
          },
          [_vm._v(_vm._s(tag.text))]
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);