
const getRecipes = () => {
    let data = {
        key: '3e5697e7c4290af4d54d48ac0884de2f',
        food1: document.getElementById('input').value,
    }

    const url = `https://www.food2fork.com/api/search?key=${data.key}&q=${data.food1},${data.food2},${data.food3},${data.food4},${data.food5}`
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        })
}