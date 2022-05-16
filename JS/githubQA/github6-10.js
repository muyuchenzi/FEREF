// 6、引用类型进行赋值的过程中传递的是指针，如果内存中的值变化，传递过去的也会变化
let c={
    greeting:"Hey!"
}
let d
d=c
c.greeting="hello"
console.log(d.greeting)

// 7、==是进行值进行对比===需要对值和类型进行对比
let a=3
let b= new Number(3)//创建的是一个对象
let f=3
console.log(a===f)
console.log(a==b)
console.log(a===b)
console.log(b===f)

class Chameleon{
    static colorChange(newColor){
        this.newColor=newColor
        return this.newColor
    }
    constructor ({newColor="green"}){
        this.newColor=newColor
    }
}
const fredie=new Chameleon({newColor:"purple"})
console.log(fredie.newColor)
// console.log(fredie.colorChange('orange'))
// 8、
let greeting
greeting={}
console.log(greeting)
// 9、除了值类型之外一切都是对象。
function bark(){
    console.log("woof")
}
bark.animal='dog'
console.log(bark.animal)
// 10、类的原型链
function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
}
const member=new Person("muyu","chenzi")
Person.prototype.getFullname=function(){
    return `${this.firstName}+${this.lastName}`
}
console.log(member.getFullname())
