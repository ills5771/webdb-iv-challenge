exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Grandma Rosa's babbaganoush", dish_id: 1 },
    { name: "Gorskiy style Salad Olivie", dish_id: 2 },
    { name: "Dadya Vanya by Dadya Yanik", dish_id: 3 }
  ]);
};
