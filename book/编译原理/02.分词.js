let WHITESPACE = /\s/;
let NUMBERS = /[0-9]/;

const Number = 'Number';
const Plus = 'Plus';

let currentToken;
let tokens = [];

function emit(token){
    currentToken = { type: "", value: "" };
    tokens.push(token);
}

// start 是个开始状态函数
// 它是一个函数，接受一个字符，返回下一个状态函数
function start(char){
    if(NUMBERS.test(char)){
        currentToken = {
            type:Number,
            value:''
        }
        return number(char);
    }
    throw new TypeError('函数名必须是字符 '+ char); 
}
function number(char){
    if(NUMBERS.test(char)){
        currentToken.value += char;
        return number;
    }else if(char == "+"){
        emit(currentToken);
        // 加号本身也是token
        emit({ type: Plus,  value: '+'});
        currentToken = {
            type:Number,
            value:''
        }
        return number;
    }
}
// 主入口，
function tokenizer(input){
  let state = start;//刚开始处于开始状态
  for(let char of input){//遍历或者说循环所有的字符
      if(state) state = state(char);
  }
  return tokens;
}

tokenizer('10+20')
// 分词的最终结果
[
  { type: 'Number', value: '10' },
  { type: 'Plus', value: '+' },
  { type: 'Number', value: '20' }
]