fetch('https://api.github.com/users/CoreyWilson319')
.then(function(response){
    return response.json();
})
.then(function(githubData){
    console.log(githubData);
})

.catch(function(error) {
    console.log(error)
})