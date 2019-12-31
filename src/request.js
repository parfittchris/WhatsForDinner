//  import render from './render'
getRecipes = () => {
    const appId = 'da498f52'
    const appKey = 'dc304052f9073320d92a40ff47e5504b'
    
    let data = {
        key: appKey,
        id: appId,
        food: document.getElementById('input').value,
    }
    
    const url1 = `https://api.edamam.com/search?to=20&`
    const url2 = `&app_id=${data.id}&app_key=${data.key}`

    searchTerms.push(data.food)

    appendSearches = () => {
        let results = "q=";
        searchTerms.forEach(term => {
            results += term + ','
        });
        return results
    }


    return fetch(url1 + appendSearches() + url2)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            const result = JSON.stringify(myJson);
            const json = JSON.parse ( result )

            let resultArray = [{parent:"", id:`root`, image:"", name:"", url:""}];
            json.hits.forEach(recipe => {

                const modRecipe = {
                    parent: 'root',
                    id: recipe.recipe.label,
                    image: recipe.recipe.image,
                    name: recipe.recipe.label,
                    url: recipe.recipe.url
                }
                resultArray.push(modRecipe)
            });
            render(resultArray);
        })
}

resetSearch = () => {
    searchTerms = [];
    d3.select('#ingredients-list')
      .selectAll('li').remove();
    d3.select('svg').remove();
    
    changePicture("./Images/wfd-logo.png")
}

changePicture = (image) => {
    document.getElementById('image-show').src = image;
}

