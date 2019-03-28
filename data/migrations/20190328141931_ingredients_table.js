exports.up = function(knex) {
  return knex.schema.createTable("ingredients", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
