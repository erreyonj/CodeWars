// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operand) {
    if(!operand){
      return 0  
    } 
    switch(operand[0]){
            case '+':
                return 0 + operand[1]
            case '-':
                return 0 - operand[1]
            case '*':
                return 0 * operand[1]
            case '/':
                return Math.floor(0 / operand[1])
        }
}
function one(operand){
    //will need to use operand, but if func is called inside operand, should just return the num for use
    if(!operand){
      return 1  
    } 
    switch(operand[0]){
            case '+':
                return 1 + operand[1]
            case '-':
                return 1 - operand[1]
            case '*':
                return 1 * operand[1]
            case '/':
                return Math.floor(1 / operand[1])
        }
}
function two(operand){
    if(!operand){
      return 2  
    } 
    switch(operand[0]){
            case '+':
                return 2 + operand[1]
            case '-':
                return 2 - operand[1]
            case '*':
                return 2 * operand[1]
            case '/':
                return Math.floor(2 / operand[1])
        }
}
function three(operand){
    if(!operand){
      return 3  
    } 
    switch(operand[0]){
            case '+':
                return 3 + operand[1]
            case '-':
                return 3 - operand[1]
            case '*':
                return 3 * operand[1]
            case '/':
                return Math.floor(3 / operand[1])
        }
}
function four(operand){
    if(!operand){
      return 4  
    } 
    switch(operand[0]){
            case '+':
                return 4 + operand[1]
            case '-':
                return 4 - operand[1]
            case '*':
                return 4 * operand[1]
            case '/':
                return Math.floor(4 / operand[1])
        }
}
function five(operand){
    if(!operand){
      return 5  
    } 
    switch(operand[0]){
            case '+':
                return 5 + operand[1]
            case '-':
                return 5 - operand[1]
            case '*':
                return 5 * operand[1]
            case '/':
                return Math.floor(5 / operand[1])
        }
}
function six(operand){
    if(!operand){
      return 6  
    } 
    switch(operand[0]){
            case '+':
                return 6 + operand[1]
            case '-':
                return 6 - operand[1]
            case '*':
                return 6 * operand[1]
            case '/':
                return Math.floor(6 / operand[1])
        }
}
function seven(operand){
    if(!operand){
      return 7  
    } 
    switch(operand[0]){
            case '+':
                return 7 + operand[1]
            case '-':
                return 7 - operand[1]
            case '*':
                return 7 * operand[1]
            case '/':
                return Math.floor(7 / operand[1])
        }
}
function eight(operand){
    if(!operand){
      return 8  
    } 
    switch(operand[0]){
            case '+':
                return 8 + operand[1]
            case '-':
                return 8 - operand[1]
            case '*':
                return 8 * operand[1]
            case '/':
                return Math.floor(8 / operand[1])
        }
}
function nine(operand){
    if(!operand){
      return 9  
    } 
    switch(operand[0]){
            case '+':
                return 9 + operand[1]
            case '-':
                return 9 - operand[1]
            case '*':
                return 9 * operand[1]
            case '/':
                return Math.floor(9 / operand[1])
        }
}

function plus(num){
    let res = num
    return ['+',res]
}
function minus(num){
    let res = num
    return ['-',res]
}
function times(num){
    let res = num
    return ['*',res] 
}
function dividedBy(num){
    let res = num
    return ['/',res]
}