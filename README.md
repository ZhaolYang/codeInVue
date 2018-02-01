# codeinvue

> write HTML, css, javascript code in vue file directively

## Build Setup

## Installation

### NPM

```bash
npm install codeinvue --save
```

## Usage

### main.js
```js
import Vue from 'vue'
import App from './App.vue'
import codeinvue from './lib/codeInVue'

Vue.use(codeinvue);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### app.vue
[vue](./src/assets/vue.png)

### effect
[effect](./src/assets/effect.png)