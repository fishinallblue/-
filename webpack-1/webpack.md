## webpack
- webpack 打包后的结果是一个自执行的函数
- modules 参数是一个对象，对象key是一个路径，值就是文件的内容
- require 变成了 webpack_require 
- 其实就是自己实现了commonjs 规范

* 