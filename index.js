//导入开发的组件
import Alert from './Alert';

//定义插件
const myplugs = {
    //定义install方法将组件注册到vue上。
    install(Vue,options){
        //前边是定义的对外组件名，后边Alert是开发的组件
        Vue.component('myAlert',Alert);
    }
}

//最后将插件导出即可，最后在全局引用，在main.js中
//1、使用import myplugs from './lib/index';
//2、使用Vue.use(myplugs)即可
export default myplugs;