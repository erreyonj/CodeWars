/////////////
// 6kyu Follow That Spy
/////////////

// We are diligently pursuing our elusive operative, Matthew Knight, who also goes by the alias Roy Miller. He employs a nomadic lifestyle to evade detection, constantly moving from one location to another, with each of his journeys following a perplexing and non-standard sequence of itineraries. Our mission is to decipher the routes he will undertake during each of his voyages.

// Task
// You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.

// Example
// Based on the provided routes:

// [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
// The correct sequence of destinations is:

// "USA, BRA, UAE, JPN, PHL"
// Note:

// You can safely assume that there will be no duplicate locations with distinct routes.
// All routes provided will have non-empty itineraries.
// There will always be at least one (1) route connecting one waypoint to another.

// it should return the places from the given routes

function findRoutes(routes) {
    // order is determined by singularly occuring locations
    // If location is index 0 of it's element, it is starting location
    // if index is 1 it is end of route
    let spyroute = ''


    // splits all location into a string to compare for dups
    let routeStr = routes.join(' ').split(',').join(' ')
    console.log(routeStr)

    // need to get starting location, so need to check for duplicates. Filter to return the arrays that have values that DO NOT occur more than once in routeStr
    // actually provides starting and ending location

    let begAndEnd = routes.filter( arr => [...routeStr.matchAll(arr[0])].length === 1 || [...routeStr.matchAll(arr[1])].length === 1)

    console.log(begAndEnd)


    // There will always be one ending and one beginning, but anymore than one flight would give two arrays to get ending and beginning
    // need to account for single flight which would return a single array that has beg and end
    let beg;
    let end;
    if(begAndEnd.length === 1){
        beg = begAndEnd[0][0]
        end = begAndEnd[0][1]
    } else {
        beg = begAndEnd[0][0]
        end = begAndEnd[1][1]
    }

    console.log(beg,end)


    
    // using beginning and end need to find how to chain each route array sequentially. Will need to comeback and add conditional for single flight option
    // first find start arr
    
    // console.log(
    //     routes.findIndex( arr => arr.includes(beg))
    // )
    

    let begIndex = routes.findIndex( arr => arr.includes(beg))
    console.log(begIndex)
    console.log(routes.filter( arr => arr[0] === routes[begIndex][1]))
    let ordArr = []
    for(let i = 0; i < routes.length; i++){
        let ordNum = routes.findIndex( arr => arr === routes.filter( arr => {
            arr[0] === routes[begIndex][1]
        }))

            begIndex = ordNum
            ordArr.push(ordNum)


    }

    console.log(ordArr)
    
}

findRoutes(spy)