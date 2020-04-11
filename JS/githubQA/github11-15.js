// 类的原型链
function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
}
const member=new Person("muyu","chenzi")
Person.prototype.getFullname=function(){
    return `${this.firstName}+${this.lastName}`
}
console.log(member.getFullname())

// 12、类的创建必须用new
const lydia=new Person('Lydia','Hallie')
const sarah=Person('Sarah','Smith')
console.log(lydia)
console.log(sarah)
// 13、
// DOM事件传播的三个阶段-》capture(找到元素)-》target(拿到元素)-》执行

// 14、除了基本对象所有对象都有原型。


// 15、
function sum(a,b){
    return a+b
}
console.log(sum(1,"2"))