////////////////
// CODE WARS 6 KATA CHALLENGE
////////////////


// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.


//////////////
// ATTEMPT
//////////////

// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1=['live','strong','lyal','lysh','arp']
a2=['lively','alive','harp','sharp','armstrong']

function inArray(arr1,arr2){
    let ans = []
    let a2Str = arr2.join('') 
    arr1.forEach((j,i)=> a2Str.includes(j) ? ans.push(j) : '')
    return ans.sort((a,b)=>a.localeCompare(b))
}

console.log(inArray(a1,a2))

// INCOMPLETE AS OF 3/14/24