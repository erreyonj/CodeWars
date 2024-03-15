//////////////
// 6 KYU
//////////////

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Close but replace only replaces first instance
// function wave(str){
//     let block = str.split(' ').join('').lowerCase()
//     let chain = []
//     for(let i = 0; i < block.length; i++){
//         // I want str with the char at i to UpperCase
//         let part = block.replace(block.charAt(i),block.charAt(i).toUpperCase()) 
//         chain.push(part)
//     }
//     return chain
// }


// function wave(str){
//     let block = str.split(' ').join('').toLowerCase()
//     let chain = []
//     for(let i = 0; i < block.length; i++){
//         let part = block.slice(0).split('')
//         part[i] = block[i].toUpperCase()
//         let newPart = part.join('')
//         chain.push(newPart)
//     }
//     return chain
// }


// doesn't handle multi words but handles empty space
// function wave(str){
//     // let block = str.split(' ').join('').toLowerCase()
//     let chain = []
//     for(let i = 0; i < str.length; i++){
//         let part = str.slice(0).split('')
//         part[i] = str[i].toUpperCase()
//         let newPart = part.join('')
//         chain.push(newPart)
//     }
//     return chain
// }


// COMBINED BUT MAN IS THIS UGLY
function wave(str){
    let chain = []
    if(str.slice(0).split(' ').length > 1){
        for(let i = 0; i < str.length; i++){
            // I want str with the char at i to UpperCase
            let part = str.replace(str.charAt(i),str.charAt(i).toUpperCase()) 
            chain.push(part)
        }
        return chain
    } else{
        for(let i = 0; i < str.length; i++){
            let part = str.slice(0).split('')
            part[i] = str[i].toUpperCase()
            let newPart = part.join('')
            chain.push(newPart)
        } 
        return chain
    }
}

// INCOMPLETE AS OF 3/14/24