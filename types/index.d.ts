import Vue from 'vue'

// import { VueConstructor } from "vue"
// import { Vue } from "vue/types/vue";
// import { ComponentOptions } from "vue/types/options";

import { PluginFunction, PluginObject } from "vue/types/plugin";
import { VNode } from "vue/types/vnode";



declare module "vue/types/vue" {


  type VuePlugin = PluginObject<any> | PluginFunction<any>;



  interface VueConstructor<V> {


    /**
     * 全局注册多个组件
     * @param componentOptions  : {componentName:string,component:VueComponent} 注册组件的配置对象，属性是组件的名字，值是需要注册的组件
     */
    regComponents(componentOptions: { [componentName: string]: object | VueConstructor<V> }): void;




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




