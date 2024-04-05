// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


function persistence(num) {
    let arr = num.toString().split('').map((ltr)=>Number(ltr))
    let ans=10;
    let i = 0
    while(ans>=10){
        ans = arr.reduce((acc,c)=>acc*c,1)
        // convert back to array if over 10
        ans >= 10 ? arr = ans.toString().split('').map((ltr)=>Number(ltr)) : ans
        if(ans === num){
        return 0  
      }
      i++
    }
    return i
}