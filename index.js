// Code your solution here
function findMatching(drivers,string){
   return drivers.filter(function(one){
    return one.toLowerCase() === string.toLowerCase()
   })
}
function fuzzyMatch(drivers,string){

    if (string.length === 2){

    return drivers.filter(function(one){
        if (one[0].toLowerCase() === string[0].toLowerCase() &
        one[1].toLowerCase()  === string[1].toLowerCase()){
            return one
        }
    })}
    else return []
    
}
function matchName(drivers, string ){

     return drivers.filter(function(one){
          return one.name === string 
    })
}

 