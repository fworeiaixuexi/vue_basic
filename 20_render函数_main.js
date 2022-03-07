/*
* 该文件是整个项目的入口文件
* */
//引用Vue
// import Vue from 'vue/dist/vue' //完整版vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

/*
* 关于不同版本的Vue
*
* 1.vue.js与vue.runtime.xxx.js的区别：
*   （1）.vue.js是完整版的Vue，包含：核心功能+模板解析器。
*   （2）.runtime.xxx.js是运行版本的Vue，只包含：核心功能；没有 模板解析器。
*
* 2.因为runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
*   render函数接收到的createElement函数去指定具体内容。
* */

//创建Vue实例对象---vm
new Vue({
  //精简版vue无法解析模板，1.可以使用render解决2.使用完整版vue
  render: h => h(App),
}).$mount('#app')
