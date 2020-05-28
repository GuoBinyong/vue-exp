import Vue from 'vue'

// import { VueConstructor } from "vue"
// import { Vue } from "vue/types/vue";
// import { ComponentOptions } from "vue/types/options";

import { PluginFunction, PluginObject } from "vue/types/plugin";
import { VNode } from "vue/types/vnode";



declare module "vue/types/vue" {

  // 因为 PluginFunction<any> 不能兼容 PluginFunction<never> （VueRouter就是PluginObject<never> 类型）类型，所以需要添加 never 相关的联合
  // type VuePlugin = PluginObject<any> | PluginObject<never> | PluginFunction<any> | PluginFunction<never> ;

  // type PluginFun = (Vue: VueConstructor, options?: any) => void;
  type PluginFun = (Vue: VueConstructor, ...args:any[]) => void;
  // type PluginFun = (...args:any[]) => void;
  // type PluginFun = Function;
  interface PluginObj {
    install: PluginFun;
    [key: string]: any;
  }
  type VuePlugin = PluginObj | PluginFun;



  interface VueConstructor<V> {


    /**
     * 全局注册多个组件
     * @param componentOptions  : {componentName:string,component:VueComponent} 注册组件的配置对象，属性是组件的名字，值是需要注册的组件
     */
    regComponents(componentOptions: { [componentName: string]: object | VueConstructor }): void;




    /**
     * 全局应用多个插件
     * @param plugins  : Array<VuePlugin | [VuePlugin,options]>  插件数组
     */
    usePlugins(plugins: (VuePlugin | [VuePlugin, any])[]): void;


    /**
     * 全局注册多个混入
     * @param mixins  : Array<Mixin> 混入数组
     */
    regMixins(mixins: (VueConstructor | object)[]): void;




  }





  interface Vue {
    readonly $allSlots: VNode[];
  }



}




