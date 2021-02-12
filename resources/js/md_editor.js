import Vue from 'vue';
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// 直接按需引入 prism 的语言包即可，此处以 json 为例
import 'prismjs/components/prism-json';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
// 按需引入 highlightjs 的语言包，此处以 json 为例
import json from 'highlight.js/lib/languages/json';

import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';

VMdEditor.use(createHighlightLinesPlugin());

VMdEditor.Codemirror = Codemirror;

// VMdEditor.use(githubTheme, {
//   extend(md, hljs) {
//     // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
//     // md.set(option).use(plugin);
//     // 注册语言包
//     hljs.registerLanguage('json', json);
//   },
// });


VMdEditor.use(vuepressTheme, {
  extend(md) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  },
});

Vue.use(VMdEditor);
