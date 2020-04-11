// 33、call bind
const person = {
    name: "Lydia"
}

function sayHi(age) {
    console.log(`${this.name} is ${age}`)
}
sayHi.call(person, 21)
console.log(sayHi.bind(person, 23)())

// 34、
function sayHi() {
    return (() => 0)()
}
console.log(typeof sayHi())

// 37、
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers[4])

// 38、

(() => {
    let x, y
    try {
        throw new Error()
    } catch (x) {
        (x = 1, y = 2)
        console.log(x)
    }
    console.log(x)
    console.log(y)
})

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, "one");
  });