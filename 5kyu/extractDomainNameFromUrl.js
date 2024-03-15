////////////
// 3/12/24
////////////

////////////
// 5 Kyu 
////////////


// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain namee-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    // success with no Regex
    let prefix1 = 'http://'
    let prefix2 = 'http://www.'
    let prefix3 = 'https://'
    let prefix4 = 'https://www.'
    let prefix5 = 'www'
    let domain;
    if(url.includes(prefix1) || url.includes(prefix2) || url.includes(prefix3) || url.includes(prefix4) || url.includes(prefix5)){
        if(url.includes('www')){
            const ending = url.slice(url.indexOf('.')+1)
            const ending2 = ending.slice(0,ending.indexOf('.'))
            domain = ending2
        } else if(url.includes('https')){
            const ending = url.slice(8)
            const ending2 = ending.slice(0,ending.indexOf('.'))
            domain = ending2
        } else if(url.includes('http')){
            const ending = url.slice(7)
            console.log(ending)
            const ending2 = ending.slice(0,ending.indexOf('.'))
            domain = ending2
        } 
    } else {
        const ending = url.slice(0,url.indexOf('.'))
        domain = ending 
    }
    return domain
}

// console.log(domainName('www.xakep.ru'))

'http://i73tdalvbff5l-n17bont.tv/archive/'