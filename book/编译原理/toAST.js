let ASTNode = require('./astNode');
let tokenTypes = require('./tokenTypes');
let nodeTypes = require('./nodeTypes');

// 递归下降
// 下降：一层一层剥开 add 套 mutiple ，multiple套number
// 递归：自己调自己

// 2 + 3 * 4
// add ->  multiple|multiple + add
// multiple -> NUMBER | NUMBER *  multiple

function toAst(tokenReader){
    let node = new ASTNode('Program');
    let child = additive(tokenReader);
    if (child != null) {
        node.addChild(child);
    }
    return node;
}

function additive(tokenReader){
    let child1 = multiplicative(tokenReader);
    let node = child1;
    let token = tokenReader.peek(); // 看看下一个符号是不是加号
    if (child1 != null && token != null) {
      if(token.type === tokenTypes.PLUS||token.type === tokenTypes.MINUS){// 如果后面是加号
            token = tokenReader.read();
            let child2 = additive(tokenReader);
            if (child2 != null) {
                node = new ASTNode(token.type === tokenTypes.PLUS?nodeTypes.Additive:nodeTypes.Minus);
                node.addChild(child1);
                node.addChild(child2);
            } else {
                throw new Exception("非法的加法表达式,需要右半部分");
            }
        }
    }
    return node;
}
function multiplicative(tokenReader){
    let child1 = primary(tokenReader);
    let node = child1;

    let token = tokenReader.peek();
    if (child1 != null && token != null) {
      if(token.type === tokenTypes.MULTIPLY||token.type === tokenTypes.DIVIDE){
            token = tokenReader.read(); // * 
            let child2 = multiplicative(tokenReader);
            if (child2 != null) {
                // 构建一个父节点，里头有两个子节点
                node = new ASTNode(token.type === tokenTypes.MULTIPLY?nodeTypes.Multiplicative:nodeTypes.Divide);
                node.addChild(child1);
                node.addChild(child2);
            } else {
                throw new Exception("非法的乘法表达式,需要右半部分");
            }
        }
    }
    return node;
}

function primary(tokenReader){
    let node = null;
    let token = tokenReader.peek(); // 看看当前的这个token
    if (token != null) {
        // 如果能取出token，并且token的类型是数字的话，就匹配上了
        if (token.type == tokenTypes.NUMBER) {
            token = tokenReader.read(); 
            // 真正的读这个节点，并创建一个新的语法树节点
            node = new ASTNode(nodeTypes.Numeric, token.value);
        }
    }
    return node;
}

module.exports = toAst;