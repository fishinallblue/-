/*
 * @Author: hediahe
 * @Date: 2022-08-07 15:41:09
 * @LastEditTime: 2022-08-07 15:41:09
 * @LastEditors: hediahe
 * @Description: 
 */
class ASTNode{
  constructor(type,value){
      this.type = type;
      if(value)this.value = value;
  }
  addChild(child) {
    if(!this.children) this.children=[];
    this.children.push(child);
  }
}

module.exports = ASTNode;