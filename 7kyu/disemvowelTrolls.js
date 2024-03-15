///////////////
// 2/14/24
///////////////

///////////////
// 7kyu CHALLENGE
///////////////
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


///////////////
// ATTEMPTS
///////////////

function disemvowel(str) {
    return str.replaceAll(/[a*e*i*o*u*]/gi,'')
}

const cussing = 'lol Kiss my ass you bitch!'
console.log(disemvowel(cussing))
//success! welp. Learning regex in the previous challenge made this easy