// 让ts中能识别vue文件
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
  
    const componentOptions: ComponentOptions
    export default componentOptions
  }
  
  
  
