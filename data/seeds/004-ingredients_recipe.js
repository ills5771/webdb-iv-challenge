exports.seed = function(knex) {
  return knex("ingredients_recipe").insert([
    { recipe_id: 1, ingredients_id: 1, grams: 100 },
    { recipe_id: 1, ingredients_id: 2, grams: 20 },
    { recipe_id: 3, ingredients_id: 2, grams: 40 }
  ]);
};
