// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let res;

    s.split('').forEach((ltr,i)=>{
        let lc = ''
        function addLc(i){
        for(let j=0; j<i; j++){
          lc+=ltr.toLowerCase()
        }
        return lc
        }
       res += `${ltr.toUpperCase()}${addLc(i)}-`
    })

    let fin = res.split('')
    // not sure where undefined is coming from, start idx of 9(characters of undefined) is qfix
    return fin.slice(9,fin.length-1).join('')
  }
