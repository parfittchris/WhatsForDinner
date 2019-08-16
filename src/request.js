//  import render from './render'

 getRecipes = () => {
    const keys = {
        one: "38f4e777cf422a543c6e900cb8bbdf9e",
        two: '3e5697e7c4290af4d54d48ac0884de2f'
    }

    let data = {
        key: keys.one,
        food: document.getElementById('input').value,
    }
    
    const url = `https://www.food2fork.com/api/search?key=${data.key}`
    searchTerms.push(data.food)

    appendSearches = () => {
        let results = "&q=";
        searchTerms.forEach(term => {
            results += term + ','
        });
        return results
    }
    return fetch(url + appendSearches())
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            const result = JSON.stringify(myJson);
            const json = JSON.parse ( result )
            let resultArray = [{parent:"", id:`root`, image:"", url:""}];
            json.recipes.forEach(recipe => {
                const modRecipe = {
                    parent: 'root',
                    id: recipe.title,
                    image: recipe.image_url,
                    url: recipe.source_url
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
      
    render(searchTerms);
}

changePicture = (image) => {
    document.getElementById('image-show').src = image;
}

