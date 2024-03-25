// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(a) {
    let oddy = []
    // need to eject odds and their idx to arr
    a.forEach((el,i)=>{
        el % 2 !== 0 ? oddy.push([el,i]) : ''
    })
    // now filter out odds from input arr
    let fin = a.filter((el)=>el % 2 === 0) 
    // makes odds arr from oddy
    let odds = []
    oddy.forEach((arr)=>{
        odds.push(arr[0])
        arr.splice(0,1)
    })
    // sort odds
    odds.sort((a,b)=>a-b)
    // re insert sorted odds to oddy for appropriate idx
    oddy.forEach((arr,i)=>{
        arr.unshift(odds[i])
    })
    // reinsert oddy nums at appropiate index
    oddy.forEach(arr=>{
        fin.splice(arr[1],0,arr[0])
    })
    return fin
}