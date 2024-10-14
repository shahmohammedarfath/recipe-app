import express from "express";
import {
  createRecipe,
  getAllRecipes,
  recipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createRecipe);
router.get("/all", getAllRecipes);
router.get("/:id", recipeById);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
