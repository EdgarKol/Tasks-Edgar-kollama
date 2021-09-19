const makeARandomNumber = function() {
    return Math.floor((Math.random() * 100) + 1);
}
const isEven = function(Math, randoms) {

    if (Math, randoms % 2 === 0) {

        return true
    } else {
        return false
    }
}
let randoms = Array(5).fill(0).map(makeARandomNumber); // generates random numbers array
let random = Array(5).fill(0).map(isEven)
Array.max = function(randoms) {
    return Math.max.apply(Math, randoms) // checks highest number in array
}
Array.min = function(randoms) {
    return Math.min.apply(Math, randoms) // checks lowest number in array
}

console.log(randoms)
console.log(Math.max.apply(Math, randoms)) // logs out highest number in array
console.log(Math.min.apply(Math, randoms)) // logs out lowest number in array
console.log(random)