import express from "express";
import {
  addFood,
  getFoodList,
  removeFood,
} from "../controllers/FoodController.js";
import multer from "multer";
const foodrouter = express.Router();
// disc storage for food images

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
foodrouter.post("/add", upload.single("image"), addFood); // => 1 upload image

foodrouter.get("/list", getFoodList); // get list of food
foodrouter.delete("/del/:id", removeFood); // remove food from list
export default foodrouter;
