import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Login_data from "../../components/Login_data/M_data.vue"
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.interceptors.push((request, next) => {
　　next((response) => {//在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
       if(response.body.error_code == 103){
         $.cookie('B-access_token',null);
         $.cookie('loginSuccess',null)
         alert('登录超时，请重新登录');
         location.href='terminal.html'
       }
　　　　return response;
  });
});
/* eslint-disable no-new */
 new Vue({
   el: '#Login_data',
   template: '<App/>',
   components: { App }
 })
