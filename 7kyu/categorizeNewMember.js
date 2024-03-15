///////////////
// CHALLENGE
///////////////

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. (7 down to -2 no?) In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. (best players have -2)

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

///////////////
// ATTEMPTS
///////////////

const input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// function openOrSenior(data){
//     const memStatus = data.map((arr)=>{
//         if(arr[0]>54){
//             if(arr[1]>= 7){
//                 return 'Senior'
//             }
//         } 
//         else return 'Open'
//     })
//     return memStatus
// }

const getMemStatus = openOrSenior(input)
console.log(getMemStatus);
//success!

//refactor with ternary?
function openOrSenior(data){
    return data.map((arr)=>arr[0]>54 && arr[1] > 7 ? 'Senior' : 'Open')
}
//success!!



// can destructure for ease and readability, copied from CodeWars
function openOrSenior(data){
    return data.map(([age,handicap])=> (age > 54 && handicap > 7) ? 'Senior' : 'Open')
}
