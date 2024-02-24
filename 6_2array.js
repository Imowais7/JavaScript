const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","batman","flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][2])

const allHeros=marvelHeros.concat(dcHeros)
console.log(allHeros)

const all_new_heros=[...marvelHeros,...dcHeros]
console.log(all_new_heros)

const anotherArray=[1,2,3,[3,7,5,],6,7,[44,66,[33,3,33,555]],9]
const anotherArray1=anotherArray.flat(Infinity)
console.log(anotherArray1)

// checking and converthing array
console.log(Array.isArray("Pokemon"))
console.log(Array.from("Pokemon"))


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3))