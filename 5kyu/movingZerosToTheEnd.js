//////////////
// 5 Kyu
//////////////

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

let mizu = [false,1,0,1,2,0,1,3,"a"]
let mizu2 = [1,2,0,1,0,1,0,3,0,1]
let mizu3 = [ false, '5', false, '1', false, true, '5', '4', '2', 9, 6, '6', '8', null, [], 8, {}, {}, {}, 5, {}, '0', 1, true ]
let mizu4 = [ 9, [], '0', '4', '4', null, '7', '1', [], '6', false, true, 9, '0', '1', [], null, +0, +0 ]

function moveZeros(arr) {
    const zeros = arr.filter(item => item === 0)
    let lessZeros = arr.filter(item => item !== 0)
    zeros.forEach(item => {
        lessZeros.push(item)
    })
    return lessZeros
}

console.log(moveZeros(mizu4))