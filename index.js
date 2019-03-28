const express = require("express");
const helmet = require("helmet");

const db = require("./data/dbConfig.js");
const RecipeBook = require("./recipe-book/book-model.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/dishes", async (req, res) => {
  try {
    const dishes = await RecipeBook.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/dishes/:id", async (req, res) => {
  try {
    const dish = await RecipeBook.getDish(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post("/api/dishes", async (req, res) => {
  try {
    const dish = await RecipeBook.addDish(req.body);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({
      message: "Error adding dish"
    });
  }
});

server.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await RecipeBook.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/recipes/:id", async (req, res) => {
  try {
    const recipe = await RecipeBook.getRecipesById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 7000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
