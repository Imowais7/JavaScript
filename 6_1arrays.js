const myArray=[0,1,2,3,4,5]
const MyHeros=["ironMan", "thor", "loki", "chaptainAmarica"]
const myArray2=new Array(1,2,3,4,5,6)
console.log(myArray[0])
// Array methods

myArray.push(6,7)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)
console.log(myArray.includes(9))
console.log(myArray.indexOf(3))

const newArr = myArray.join()
console.log(newArr)


// slice, splice

console.log("A",myArray)
const myn1=myArray.slice(1,3)
console.log(myn1)

const myn2=myArray.splice(1,3)
console.log(myn2)
console.log("B",myArray)

