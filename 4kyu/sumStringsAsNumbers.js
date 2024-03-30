// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.



function sumStrings(a,b) {
    // vars for placing added nums, holding the carry value,
    // and the str as num arrays, not reversed
    let bigSum = ''
    let carry = 0
    let aStr = a.split('').map(num=>Number(num))
    let bStr = b.split('').map(num=>Number(num))

    // handle any inital leading 0s here
    while(aStr[0] === 0){
        aStr.shift()
    }
    while(bStr[0] === 0){
        bStr.shift()
    }

    // NOW do reverse for adding
    aStr.reverse()
    bStr.reverse()

    // ensure arrays are same lenghth by padding leading 0 to b if a is longer and vice versa
    while(aStr.length>bStr.length){
        bStr.push(0)
    }
    while(aStr.length<bStr.length){
        aStr.push(0)
    }

    // iterate over aStr adding corresponding idx's and sending up carry
    aStr.forEach((num,i)=>{
        let lilSum = num + bStr[i]
        // handle carry with arry elements
        if(lilSum >= 10){
            lilSum -= 10
            lilSum += carry
            carry = 1
            return bigSum += lilSum.toString()
            // handle carry if lilSum and carry is 10 or more
        } else if(lilSum + carry >= 10){
            lilSum += carry
            lilSum -= 10
            carry = 1
            return bigSum += lilSum.toString()
        }
        // if above conditions are not true simply adds lilSum and any carry to bigSum string
        bigSum += (lilSum + carry).toString()
        // reset carry to 0 in case next forEach loop does not have carry
        carry = 0
    })
    // reverse bigSum str
    let lastSum = bigSum.split('').reverse().join('')
    // handle final carry by checking if last element sums or last element sums plus current carry value are 10 or more
    if(aStr[aStr.length-1] + bStr[bStr.length-1] >= 10 || (aStr[aStr.length-1] + bStr[bStr.length-1]+carry)>= 10){
        let  fin = lastSum.split('')
        fin.unshift('1')
        let finCar = fin.join('')
        return finCar
    }

    return lastSum.charAt(0) === '0' ? lastSum.slice(1) : lastSum
}