////////////
// 2/26/24
////////////

////////////////
// CODE WARS 6 KATA CHALLENGE
////////////////

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//////////////
// ATTEMPT
//////////////



function duplicateEncode(word){
    let ans = ''
    let wrdLc = word.toLowerCase()
    let wordArr = wrdLc.split('')
    wordArr.forEach((ltr,i)=>{
        let slicedWrd = wordArr.slice(0)
        slicedWrd.splice(i,1)
        slicedWrd.includes(ltr) ? ans+=')' : ans += '('
    })
    return ans
}

// console.log(duplicateEncode('Success'))