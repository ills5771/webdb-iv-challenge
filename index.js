const express = require("express");
const helmet = require("helmet");

const db = require("./data/dbConfig.js");
const RecipeBook = require("./recipe-book/book-model.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/dishes", async (req, res) => {
  try {
    const dishes = await RecipeBook.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/dishes/:id", async (req, res) => {
  try {
    const dish = await RecipeBook.findById(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 7000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
