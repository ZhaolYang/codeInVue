import marked from 'marked';
import 'highlight.js/styles/vs.css'

let mdRenderer = new marked.Renderer();

marked.setOptions({
  renderer: mdRenderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

let install = function (Vue) {
  if (install.installed) return;
  Vue.directive('marked', function (el, binding, vnode) {

    let html = el.innerHTML;
    if (el.classList.contains('css') || el.classList.contains('javascript')) {
      html = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    }
    el.innerHTML = marked(html);
  })
}

if(typeof window !== 'undefineed' && window.Vue) {
	window.Vue.use({install})
}

export default install;