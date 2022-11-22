/*
 * @Author: hediahe
 * @Date: 2022-08-07 17:20:22
 * @LastEditTime: 2022-08-28 18:06:48
 * @LastEditors: hediahe
 * @Description: 
 */
/*
let code = '<h1 id="title"><span>hello</span>world</h1>';
console.log(JSON.stringify(parser(code), null, 2));
*/

'let a = 1; a = a ++'

let age

age >= 45

const name = 'test' + 1

// babel 的遍历相关代码
// https://github.com/babel/babel/blob/main/packages/babel-traverse/src/traverse-node.ts
export function traverseNode(
    node: t.Node,
    opts: TraverseOptions,
    scope?: Scope,
    state?: any,
    path?: NodePath,
    skipKeys?: Record<string, boolean>,
  ): boolean {
    // 获取遍历节点
    const keys = VISITOR_KEYS[node.type];
    if (!keys) return false;
    const context = new TraversalContext(scope, opts, state, path);
    // 逐个开始遍历
    for (const key of keys) {
      if (skipKeys && skipKeys[key]) continue;
      if (context.visit(node, key)) {
        return true;
      }
    }
    return false;
  }

tokens = [
  { type: 'Keyword', value: 'let' },
  { type: 'Identifier', value: 'a' },
  { type: 'Punctuator', value: '=' },
  { type: 'Numeric', value: '1' },
  { type: 'Punctuator', value: ';' },
  { type: 'Identifier', value: 'a' },
  { type: 'Punctuator', value: '=' },
  { type: 'Identifier', value: 'a' },
  { type: 'Punctuator', value: '++' }
]

const { tokenizer } = require('../tokenizer');
const tokenTypes = require('./tokenTypes');
const nodeTypes = require('./nodeTypes');
function parser(code) {
    let tokens = tokenizer(code);
    let current = 0;
    function walk(parent) {
        let token = tokens[current]; //当前token peek
        let next = tokens[current + 1]; // peek 下一个
        // 下一个单词，因为这里需要预判一下当前<是属于开始的括号还是闭合的括号
        // 这个是处理开始标签
        if (token.type === tokenTypes.LeftParentheses && next.type === tokenTypes.JSXIdentifier) {
            let node = {
                type: nodeTypes.JSXElement,
                openingElement: null,
                closingElement: null,
                children: []
            }
            token = tokens[++current]; // 标签，取出第一个
            node.openingElement = {
                type: nodeTypes.JSXOpeningElement,
                name: {
                    type: nodeTypes.JSXIdentifier,
                    name: token.value
                },
                attributes: []
            }

            token = tokens[++current]; // 取下一个标签
            // 获取所有的属性
            while (token.type === tokenTypes.AttributeKey) {
                node.openingElement.attributes.push(walk());
                token = tokens[current];
            }
            token = tokens[++current]; // 跳过>,token=<
            next = tokens[current+1]; // 下一个token span
            // 根据结束标签的标签名一致，中间的内容都是孩子节点
            while (
                token.type !== tokenTypes.LeftParentheses //字面量子节点
                ||( token.type === tokenTypes.LeftParentheses 
                    && next.type !== tokenTypes.BackSlash)) { // walk所有孩子
                node.children.push(walk());
                token = tokens[current];
                next = tokens[current+1]; // 下一个token
            }
            node.closingElement = walk(node); // walk闭合标签
            return node;
        } 
        //处理结束标签
        else if(parent && token.type === tokenTypes.LeftParentheses && next.type === tokenTypes.BackSlash){
            current++; // 跳过<单词
            token = tokens[++current]; // 闭合标签，跳过反斜杠
            current++; // 跳过标签
            current++; // 跳过>单词
            return {
                type: nodeTypes.JSXClosingElement,
                name: {
                    type: nodeTypes.JSXIdentifier,
                    name: token.value
                }
            }
        }//处理属性
        else if(token.type === tokenTypes.AttributeKey){
            let next = tokens[++current]; // attributeValue
            let node = {
                type: nodeTypes.JSXAttribute,
                name: {
                    type: nodeTypes.JSXIdentifier,
                    name: token.value
                },
                value: {
                    type: nodeTypes.StringLiteral,
                    value: next.value
                }
            }
            current++; // 跳过attributeValue
            return node;
        }//处理文本
        else if(token.type === tokenTypes.JSXText){
            current++; // 跳过>
            return {
                type: nodeTypes.JSXText,
                value: token.value
            }
        }
        throw new TypeError(token.type);
    }
    var ast = {
        type: nodeTypes.Program,
        body: [
            {
                type: nodeTypes.ExpressionStatement,
                expression: walk()
            }
        ]
    };
    return ast;
}

module.exports = {
    parser
}