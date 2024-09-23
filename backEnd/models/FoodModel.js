import mongoose from "mongoose";
// الطوه الاولي
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// التانية
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema); // عشان يروح يشوف لو لقاه ميعملوش تاني

export default foodModel;
// خطواط عمل مودل
// 1- بتعمل سكيما
// 2-بتعمل الموديل وتديله اسم وتديله الاسكيما
