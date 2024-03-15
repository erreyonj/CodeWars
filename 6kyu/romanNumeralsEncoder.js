////////////
// 2/25/24
////////////

////////////////
// CODE WARS 6 KATA CHALLENGE
////////////////

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

//////////////
// ATTEMPT
//////////////

function solution(number){

    let strNum = number.toString().split('')
    let hunds = [
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM'
    ]

    let tens = [
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
    ]

    let ones = [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
    ]
    
    function checkMs(arr){
        let ms = []
        if(strNum.length === 4){
            for(let i=1; i <=strNum[0]; i++){
                ms.push('M')
            }
        }
        return ms
    }

    function check100s(){
        let hund = []
        if(strNum.length >= 3){
            if(strNum.length === 4){
                hund[0] = hunds[strNum[1]-1]
            }else hund[0] = hunds[strNum[0]-1]
        }
        return hund
    }

    function check10s(){
        let ten = []
        if(strNum.length >= 2){
            if(strNum.length === 4){
                ten[0] = tens[strNum[2]-1]
            } else if (strNum.length === 3){
                ten[0] = tens[strNum[1]-1]
            } else ten[0] = tens[strNum[0]-1]
        }
        return ten
    }

    function check1s(){
        let one = []
        if(strNum.length >= 1){
            if(strNum.length === 4){
                one[0] = ones[strNum[3]-1]
            } else if (strNum.length === 3){
                one[0] = ones[strNum[2]-1]
            } else if(strNum.length === 2){
                one[0] = ones[strNum[1]-1]
            } else one[0] = ones[strNum[0]-1]
        }
        return one
    }

    let mSet = checkMs(strNum)
    let hundSet = check100s(strNum)
    let tenSet = check10s(strNum)
    let oneSet = check1s(strNum)
    const answer = `${mSet}${hundSet}${tenSet}${oneSet}`.split(',').join('')

    return answer
}

// console.log(solution(3999));