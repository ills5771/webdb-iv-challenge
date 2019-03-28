exports.up = function(knex) {
  return knex.schema.createTable("ingredients_recipe", function(tbl) {
    tbl.increments();

    tbl.integer("grams", 128).notNullable();

    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("ingredients_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients_recipe");
};
