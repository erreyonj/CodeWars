// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// function longest(s1, s2) {
//     let both = s1 + s2
//     let s3 = '';
//     return both.split('').filter(x=>s3.indexOf(x)===-1).join('')
// }

function longest(s1, s2) {
    let both = s1 + s2
    let s3 = '';
    both.split('').forEach(x=>s3.indexOf(x)===-1 ? s3 += x : '')
    return s3.split('').sort((a,b)=>a.localeCompare(b)).join('')
}