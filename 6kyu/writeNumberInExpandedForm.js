// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let expanded = []
    let singleNums = num.toString().split('').reverse()
    singleNums.forEach((num,i)=>{
        let first = num
        for(let j = 0; j < i; j++){
            first += '0'
        }
        expanded.push(first)
    })
    let newex = expanded.reverse().filter(str=>str.charAt(0) !== '0').join(' + ')
    return newex
}