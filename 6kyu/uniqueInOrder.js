// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    if(iterable.constructor.name==='String'){
        iterable = iterable.split('')
    }
    // add extra interable[0] to front to handle single instance starting element
    iterable.unshift(iterable[0])
    // only give me back element if the element before and after are not the same as current element
    let filtered = iterable.filter((x,i)=>{
        return iterable[i-1]&&iterable[i+1] !== x
    })
    return filtered
}