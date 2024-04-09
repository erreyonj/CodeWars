// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    // make alphabet arr for letter values
    const alph = ['.','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    // arrayify string into sep arrs
    let words = x.split(' ')

    // gets values of each word
    let wordVals = words.map(word=>{
        // puts each arr of values into containing arr
        return word.split('').map(ltr=>{
            // puts alph values into an arr
            return alph.indexOf(ltr)
            // reduces to get arr of each words summed value
        }).reduce((acc,c)=>acc+c,0)
    })

    // get index of largest sum
    let maxIdx = wordVals.indexOf(Math.max(...wordVals))

    return words[maxIdx]
}