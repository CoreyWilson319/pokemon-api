fetch('https://api.spacexdata.com/v3/capsules')
.then(function(response){
    return response.json();
})
.then(function(SpaceXData){
    console.log(SpaceXData);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/dragons/')
.then(function(response){
    return response.json();
})
.then(function(dragonData){
    console.log(dragonData);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/history/')
.then(function(response){
    return response.json();
})
.then(historyData => {
    console.log(historyData)
})
.catch(function(error){
    console.log(error)
})

fetch('https://api.spacexdata.com/v3/landpads')
.then(function(response){
    return response.json();
})
.then(landpadsData => {
    console.log(landpadsData)
})
.catch(function(error){
    console.log(error)
})