import { VueConstructor, VNodeComponentOptions } from "vue"
import { Vue } from "vue/types/vue";

import { ComponentOptions } from "vue/types/options";

import { PluginFunction, PluginObject } from "vue/types/plugin";
import { VNode } from "vue/types/vnode";



declare module vue {

  type VuePlugin = PluginObject<any> | PluginFunction<any>;

  interface VueConstructor<V extends Vue = Vue> {


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










    //合并策略：开始

    byMergeStrategies: {

      /**
       * 合并的结果会按顺序包含 parent 和 child ;
       * @param parent
       * @param child
       * @param vm
       * @returns [parent,child]
    
       注意：
       Vue 的 合并策略 mergeHook 有个bug，原码如下：
    
    
       // Hooks and props are merged as arrays.
       function mergeHook (
       parentVal,
       childVal
       ) {
      return childVal
        ? parentVal
          ? parentVal.concat(childVal)  //这里应该先判断 parentVal 是否是数组
          : Array.isArray(childVal)
            ? childVal
            : [childVal]
        : parentVal
    }
       */
      includeAllWihtArray: (parentVal: any, childVal: any, vm: any) => any[];
    };

    //合并策略：结束


  }





  interface Vue {
    readonly $allSlots: VNode[];
  }



}




