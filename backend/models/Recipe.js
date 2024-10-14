import mongoose, { model, Schema } from "mongoose";

const recipeSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ratings: {
      type: String,
    },
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
