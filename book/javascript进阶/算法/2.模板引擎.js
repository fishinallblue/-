// 正则表达式神马的真的不会= =
// 回去仔细研读 replace和test
var render = function(template, data) {
  return template.replace(/\{\{(\w+)?\}\}/g, function(match ,key) {
        return data[key] || '';
    })
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
console.log(render(template, data)); // 我是姓名，年龄18，性别undefined