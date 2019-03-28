exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "Eggplant" },
    { name: "Garlic" },
    { name: "Mozzarella" }
  ]);
};
