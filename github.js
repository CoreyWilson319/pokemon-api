const container = document.querySelector('.container')


fetch('https://api.github.com/users/CoreyWilson319')
.then(function(response){
    return response.json();
})
.then(function(githubData){
    const coreyObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(coreyObj);

    const newElement = document.createElement('p');
    newElement.textContent = coreyObj.name;
    // append newElement to container(parent)
    container.appendChild(newElement);

    // console.log(githubData);
})

.catch(function(error) {
    console.log(error)
})