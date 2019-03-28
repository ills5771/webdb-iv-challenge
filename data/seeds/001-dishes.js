exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "Babbaganoush" },
    { name: "Salad Olivie" },
    { name: "Daddya Vanya" }
  ]);
};
