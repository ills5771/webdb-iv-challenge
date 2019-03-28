const db = require("../data/dbConfig");

module.exports = {
  getDish,
  getDishes,
  addDish,
  getRecipes,
  getRecipesById,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}
function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      return getDish(ids[0]);
    });
}

function getRecipes() {
  return db("recipes");
}
function getRecipesById(id) {
  return db("recipes")
    .where({ id })
    .first();
}
function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => {
      return getRecipesById(ids[0]);
    });
}
