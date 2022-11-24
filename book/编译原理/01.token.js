// 例子1： 将JS源码转换成为AST语法树
let esprima = require('esprima'); //把JS源代码转成AST语法树
let code = `<h1 id="title"><span>hello</span>world</h1>`;
let ast = esprima.parseScript(code, {  tokens: true,jsx: true });

console.log('ast', ast);
// 1. 把源代码进行分词，得到token数组
// 2. 将token数组转换成为抽象语法树
// const result = {
//   type: 'Program',
//   body: [
//     ExpressionStatement {
//       type: 'ExpressionStatement',
//       expression: [JSXElement]
//     }
//   ],
//   sourceType: 'script',
//   tokens: [
//     { type: 'Punctuator', value: '<' },
//     { type: 'JSXIdentifier', value: 'h1' },
//     { type: 'JSXIdentifier', value: 'id' },
//     { type: 'Punctuator', value: '=' },
//     { type: 'String', value: '"title"' },
//     { type: 'Punctuator', value: '>' },
//     { type: 'Punctuator', value: '<' },
//     { type: 'JSXIdentifier', value: 'span' },
//     { type: 'Punctuator', value: '>' },
//     { type: 'JSXText', value: 'hello' },
//     { type: 'Punctuator', value: '<' },
//     { type: 'Punctuator', value: '/' },
//     { type: 'JSXIdentifier', value: 'span' },
//     { type: 'Punctuator', value: '>' },
//     { type: 'JSXText', value: 'world' },
//     { type: 'Punctuator', value: '<' },
//     { type: 'Punctuator', value: '/' },
//     { type: 'JSXIdentifier', value: 'h1' },
//     { type: 'Punctuator', value: '>' }
//   ]
// }



// 遍历语法树
let estraverse = require('estraverse-fb'); //遍历语法树,修改树上的节点
let indent = 0; // 缩进
function padding(){
    return " ".repeat(indent);
}
// visitor 访问器 - 为了展示深度优先遍历
estraverse.traverse(ast,{
  enter(node){
    console.log(padding()+node.type+'进入');
    indent+=2;
  },
  leave(node){
    indent-=2;
    console.log(padding()+node.type+'离开');
  }
});
