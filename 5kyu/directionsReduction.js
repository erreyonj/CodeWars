// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).


// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

function dirReduc(arr){
    let nOpp = 'SOUTHNORTH'
    let eOpp = 'WESTEAST'
    let sOpp = 'NORTHSOUTH'
    let wOpp = 'EASTWEST'
    let n = 'NORTH'
    let e = 'EAST'
    let s = 'SOUTH'
    let w = 'WEST'
    let str = arr.join('')
    // loops through input arr, checks if following index is opposite and slices both if true
    let sliceOpps = () => {
        arr.forEach((dir,i)=>{
            switch(dir){
                case 'NORTH':
                    arr[i+1] === s ? arr.splice(i,2): ''
                    break
                case 'EAST':
                    arr[i+1] === w ? arr.splice(i,2): ''
                    break
                case 'SOUTH':
                    arr[i+1] === n ? arr.splice(i,2): ''
                    break
                case 'WEST':
                    arr[i+1] === e ? arr.splice(i,2): ''
                    break
            }
        })}
    // continues slicing opps until none remain    
    while(str.includes(nOpp)||str.includes(eOpp)||str.includes(sOpp)||str.includes(wOpp)){
        sliceOpps()
        str = arr.join('')        
    }
    return arr
}