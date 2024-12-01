Object.prototype.create = function(o) {
  let fn = function() {};
  fn.prototype = o;
  return new fn();
}