// 1、变量提升 var 与let的区别
function sayHi(){
    console.log(name)
    console.log(age)
    var name='lili';
    let age=12
}

// 2、var 与 let 
for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
for (let i = 0; i < 3; i++) {
    console.log('this is funciton')
    console.log(i)
    setTimeout(() => {
        console.log('this is settimeout')
        console.log(i)
    }, 10000)

// 可以理解为
function setTimeout(i){
    console.log(i)
}

for(let i=0;i<4;i++){
    console.log(i)
    setTimeout()//1000秒过去再执行
}


// 3、箭头行数没有this绑定，所以perimeter
const shape={
    radius:10,
    diameter(){
        return this.radius*2
    },
    perimeter:()=> 2 * Math.PI * this.radius
}
console.log(shape.diameter())
console.log(shape.radius)
console.log(shape.perimeter())

// 4、字符串默认为ture,
console.log(+true)
console.log(!"lis")

// 5、
const bird={
    size:"small"
}
const mouse={
    name:'mickey',
    small:true
}
console.log(mouse[bird.size])
console.log(mouse[bird['size']])