import Recipe from "../models/Recipe.js";

const createRecipe = async (req, res) => {
  const { title, ingredients, instructions, image } = req.body;
  console.log("Request body", req.body);

  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ message: "User not authorized" });
  }

  try {
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      image,
      createdBy: userId,
    });
    await recipe.save();
    res.status(200).json({ message: "Recipe successfully created", recipe });
    console.log("Recipe", recipe);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log("Some error", error);
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    if (!recipes) {
      return res.json(404).json({ message: "Recipes not found" });
    }

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const recipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Need to add authorization 
const updateRecipe = async (req, res) => {
  // const userId = req.userId;

  // if (!userId) {
  //   return res.status(401).json({ message: "User not authorized" });
  // }
  try {
    const recipeId = req.params.id;
    const updatedData = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedData);

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res
      .status(200)
      .json({ message: "Recipe updated successfully", updatedRecipe });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Errors", error);
  }
};

// Need to add authorization
const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findByIdAndDelete(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createRecipe, getAllRecipes, recipeById, updateRecipe, deleteRecipe };
