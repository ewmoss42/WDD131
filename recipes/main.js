import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const searchForm = document.querySelector('form');
    const searchInput = document.getElementById('search');

    function random(num) {
        return Math.floor(Math.random() * num);
    }

    function getRandomRecipe(recipes) {
        return recipes[random(recipes.length)];
    }

    function renderTags(tags) {
        return tags.map(tag => `<li>${tag}</li>`).join('');
    }

    function renderRating(rating) {
        let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
        for (let i = 1; i <= 5; i++) {
            html += i <= rating ? '<span class="icon-star">⭐</span>' : '<span class="icon-star-empty">☆</span>';
        }
        html += '</span>';
        return html;
    }

    function recipeTemplate(recipe) {
        return `<figure class="recipe">
                    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
                    <figcaption>
                        <ul class="recipe__tags">
                            ${renderTags(recipe.tags)}
                        </ul>
                        <h2><a href="#">${recipe.name}</a></h2>
                        <p class="recipe__ratings">
                            ${renderRating(recipe.rating)}
                        </p>
                        <p class="recipe__description">
                            ${recipe.description}
                        </p>
                    </figcaption>
                </figure>`;
    }

    function renderRecipes(recipeList) {
        recipeList.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
        recipeList.innerHTML = recipeList.map(recipeTemplate).join('');
    }

    function init() {
        renderRecipes([getRandomRecipe(recipes)]);
    }

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
        );
        renderRecipes(filteredRecipes);
    });

    init();
});
