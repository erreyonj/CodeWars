// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number
 
// The next number in having this property is 135

// Task
// We need a function to collect these numbers, that may receive two integers
// a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples
// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b] the function should output an empty list.
// 90, 100 --> []


function sumDigPow(a,b){
    // make a range arr
    let range = []
    for(let i=a; i<=b; i++){
        range.push(i)
    }
    // takes a numbers splits it into arr
    const numA = (num) => num.toString().split('').map(x=>Number(x))
    // using numA, sum digits to pows func
    const action = (arr) => arr.reduce((acc,c,i)=>acc + Math.pow(c,i+1),0)
    // filter range, only keep nums that satisfy action
    return range.filter((el)=>{
        let subject = numA(el)
        return action(subject) === el
    })
}