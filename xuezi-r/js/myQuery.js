function $(selector){//查找所有满足条件的元素
  return document.querySelectorAll(selector);
}
HTMLElement.prototype.find=function(selector){//在所有元素的原型对象中添加一个方法，在*所有后代*中查找符合selector条件的
  return this.querySelectorAll(selector);
}