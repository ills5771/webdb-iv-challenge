const db = require("../data/dbConfig");

module.exports = {
  find,
  findById
};

function find() {
  return db("dishes");
}

function findById(id) {
  return db("dishes")
    .where({ id })
    .first();
}
