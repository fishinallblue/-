// 所谓的装饰者模式，其实就是创建一个对象
// 对象一些相关的其他的属性，并不写在本对象上面，而是写在装饰的属性对象上面

// 下面是，一个飞机上面有导弹和原子弹
var Plan = function() {

}
Plan.prototype.fire = function() {
    console.log('发射普通子弹');
}

var MissileDecorator = function(plan) {
    this.plan = plan;
}
MissileDecorator.prototype.fire = function() {
    this.plan.fire();
    console.log('发射导弹');
}

var AtomDecorator = function(plan) {
    this.plan = plan;
}
AtomDecorator.prototype.fire = function() {
    this.plan.fire();
    console.log('发射原子弹');
}
var newPlan = new Plan();
newPlan = new MissileDecorator(newPlan);
newPlan = new AtomDecorator(newPlan);

newPlan.fire();