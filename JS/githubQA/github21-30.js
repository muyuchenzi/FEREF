// 21、eval 执行字符串
const sum = eval('10*10+5')
console.log(sum)

// 22、cool_secret可访问 当浏览器关掉当前的标签页的时候sessionStroage存储的数据才会丢掉
// sessionStorage.setItem('cool_secret',123)
// 23、var机
var num = 12
var num = 23
console.log(num)

// 24、所有的对象的键在底层都是字符串，即使没有在设置的时候是Number
const obj = {
    1: 'a',
    2:'b',
    3:'c'
}
const setItem=new Set([1,2,3,4,5])
console.log(obj.hasOwnProperty('1'))
console.log(obj.hasOwnProperty(1))
console.log(setItem.has('1'))
console.log(setItem.has(1))

// 25、
const obj1={
    a:'one',
    b:"two",
    a:"three"
}
console.log(obj1)
// 27、
for(let i=1;i<5;i++){
    if(i===3)continue
    console.log(i)
}
// 28、
String.prototype.giveLydiaPizza=()=>{
    return "Just give Lydia pizza already"
}
const name="Lydia"
console.log(name.giveLydiaPizza())

// 29、对象作为一个对象的键的时候，是将这个对象的键值转换为
const a={}
const b={key:"b"}
const c={key:'c'}
a[b]=124
a[c]=234
console.log(a[b])

// 30、
const foo=()=>console.log('first')
const bar=()=>setTimeout(()=>console.log('second'))
const baz=()=>console.log('Third')

bar()
foo()
baz()
