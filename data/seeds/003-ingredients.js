exports.seed = function(knex) {
  return knex("table_name").insert([
    { name: "Eggplant", recipe_id: 1 },
    { name: "Garlic", recipe_id: 1 },
    { name: "Mozzarella", recipe_id: 4 }
  ]);
};
