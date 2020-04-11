// 16、
let number=0;
console.log(number++)
console.log(++number)
console.log(number)

// 17、函数与模板字符串 第一个参数一定是字符串拆分出的array,后面的参数使{}按顺序
function getPersonInfo(one,two){
    console.log(one)
    console.log(two)
    // console.log(three)
}
const person='Lydia'
const age=21
getPersonInfo`${person} is ${age} years old`
// 18、值类型进行比较是根据值进行对比，引用类型是根据引用类型的指针指向的位置。
function checkAge(data){
    if(data==={age:18}){
        console.log("your are an adult")
    }else if(data=={age:18}){
        console.log("your are still an adult")
    }else{
        console.log(`mm.. You don't have an age I gues`)
    }
}
checkAge({age:18})
// 19、
function ageAge(...args){
    console.log('----')
    console.log(args)
    console.log(typeof args)
}
console.log(ageAge(12,23))
// 20、
function getAge(){
    'use strict'
    let age=21
    console.log(age)
}
getAge()