 
 getRecipes = () => {
    let data = {
        key: '3e5697e7c4290af4d54d48ac0884de2f',
        food: document.getElementById('input').value,
    }

    const url = `https://www.food2fork.com/api/search?key=${data.key}&q=${data.food}`
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            const result = JSON.stringify(myJson);
            const json = JSON.parse ( result )
            let resultArray = [{parent:"", id:`${data.food}`, image:"", url:""}];
            json.recipes.forEach(recipe => {
                const modRecipe = {
                    parent: data.food,
                    id: recipe.title,
                    image: recipe.image_url,
                    url: recipe.source_url
                }
                resultArray.push(modRecipe)
            });

            render(resultArray);
        })
}