// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


let sumText = ["This kata is very interesting!", 1] 
let morText = ["hskt svr neetn!Ti aai eyitrsig", 1]

function encrypt(text, n) {

    if(text === '' && n===0){
        return ''
    } else if(!text){
        return null
    }
    // turn str to arr
    let a = text.split('')
    
    // set up num of times to do work
    for(let i=0; i<n; i++){
        let odd = a.filter((_,i)=>i%2!==0).join('')
        let even = a.filter((_,i)=>i%2===0).join('')
        let oddEven = odd + even
        //ensure that a.filter considers changes each time thru for loop
        a = oddEven.split('')
    }
    return a.join('')
}

function decrypt(encryptedText, n) {
    if(encryptedText === '' && n===0){
        return ''
    } else if(encryptedText===null){
        return null
    }
    // turn str to arr
    let a = encryptedText.split('')

    // an empty ans arr that will hold iterations
    let ans=[]

    // check if a length of a is even
    if(a.length%2===0){
        // set up num of times to do work 
        for(let i=0; i<n; i++){
            // get each half
            let half1 = a.slice(0,(a.length/2))
            let half2 = a.slice((a.length/2))

            //send el's from each half to ans
            for(let j=0; j<a.length/2; j++){
                ans.push(half2[j])
                ans.push(half1[j])
            }
            // update a 
            a = ans
            // since ans holds changes, need to ensure its empty for each iteration of changes
            ans = []
        }
        return a.join('')
    }

    // if a has odd length handling?
    let pos = (a.length-1)/2
    a.splice(pos,0,'$')
    console.log(a)

    for(let i=0; i<n; i++){
        // now get each half
        let half1 = a.slice(0,(a.length/2))
        let half2 = a.slice((a.length/2))
        console.log(half1,half2)
        console.log(ans)

        //send el's from each half to an arr
        for(let j=0; j<a.length/2; j++){
            ans.push(half2[j])
            ans.push(half1[j])
        }
        //same as above need to make sure a is updated so changes reflected
        a = ans
        // based on this pattern, '$' should always end up at end so we need to pop it
        a.pop()
        // then we put it back in place (last odd position of a) for the next iteration
        a.splice(pos,0,'$')
        ans = []
    }
    // finally delete added '$'
    a.splice(a.indexOf('$'),1)
    return a.join('')
}