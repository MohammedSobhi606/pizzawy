import fs from "fs";
import foodModel from "../models/FoodModel.js";

// function to add food items
const addFood = async (req, res) => {
  try {
    // images save
    let imagename = `${req.file.filename}`;
    const newFood = new foodModel({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: imagename,
      category: req.body.category,
    });
    await newFood.save();
    res
      .status(201)
      .json({ message: "food added successfully", data: { food: newFood } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getFoodList = async (req, res) => {
  // get food list
  try {
    const foodList = await foodModel.find({});
    res.json({ message: "Food list fetched successfully", data: foodList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// remove food item

const removeFood = async (req, res) => {
  try {
    const foodToRemove = await foodModel.findByIdAndDelete(req.params.id);
    if (!foodToRemove)
      return res.status(404).json({ message: "Food not found" });
    fs.unlinkSync(`uploads/${foodToRemove.image}`); // delete image
    res.json({ message: "Food removed successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { addFood, getFoodList, removeFood };
