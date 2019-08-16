//  import render from './render'

 getRecipes = () => {
    const keys = {
        one: "38f4e777cf422a543c6e900cb8bbdf9e",
        two: '3e5697e7c4290af4d54d48ac0884de2f',
        three: 'ac54ddd63718e60c90be945d15f2c071',
        four: 'b3d41f0f8ad2655d3f9bfe411bc5f85f',
        five: '5c9de9159f9d4de6b55eb7ab546ec352',
        six: 'd136c61e00c41aeeabfc82b0711f0495'
    }

    let data = {
        key: keys.six,
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
            let resultArray = [{parent:"", id:`root`, image:"", name:"", url:""}];
            json.recipes.forEach(recipe => {
                const modRecipe = {
                    parent: 'root',
                    id: recipe.title,
                    image: recipe.image_url,
                    name: recipe.title,
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
    d3.select('svg').remove();
    
    changePicture("./Images/wfd-logo.png")
}

changePicture = (image) => {
    document.getElementById('image-show').src = image;
}

