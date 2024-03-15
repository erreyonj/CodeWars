////////////
// 3/5/24
////////////


////////////
// 6 KYU
////////////

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


////////////
// ATTEMPT
////////////

// SUCCESS
function solution(str) {
    return str.split(/(?=[A-Z])/).join(' ')
}


// W/O regex, copied from CODEWARS
// function solution(str) {
//     let broke = str.split('').map(function(ltr){
//         if(ltr === ltr.toUpperCase()){
//             el = ' ' + el
//         }
//         return el
//     })
//     return broke.join('')
// }