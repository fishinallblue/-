let RegExpObject  = /([0-9]+)|(\+)|(\-)|(\*)|(\/)/g;
let tokenTypes = require('./tokenTypes');
let tokenArray = [tokenTypes.NUMBER,tokenTypes.PLUS,tokenTypes.MINUS,tokenTypes.MULTIPLY,tokenTypes.DIVIDE];
function* tokenizer(source){
  let result = null;
  while(true){
      result = RegExpObject.exec(source);
      if(!result) break;
      let token = {type:null,value:null};
      let index = result.findIndex((item,index)=>index>0&&!!item);//获取匹配的分组的索引
      token.type = tokenArray[index-1];
      token.value = result[0];
      yield token;
  }
}
function tokenize(script){
    let tokens = [];
    for(let token of tokenizer(script)){
        tokens.push(token);
    }
    return new TokenReader(tokens);
}
class TokenReader{
    constructor(tokens){
        this.tokens = tokens;
        this.pos = 0;
    }
    read() {
        if (this.pos < this.tokens.length) {
            return this.tokens[this.pos++];
        }
        return null;
    }
    peek() {
        if (this.pos < this.tokens.length) {
            return this.tokens[this.pos];
        }
        return null;
    }
    unread() {
        if (this.pos > 0) {
            this.pos--;
        }
    }
    getPosition() {
        return this.pos;
    }
    setPosition(position) {
        if (position >=0 && position < tokens.length){
            this.pos = position;
        }
    }
}
module.exports = tokenize;
/* let tokens = tokenize('2+3*4');
console.log(tokens); */