import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function AddFood({ url }) {
  const [image, setImage] = useState("");
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salade ",
  });
  const onChangeHa = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const formhandeler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    // send data to server here
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      toast.success("food added successfully");
      setdata({
        name: "",
        description: "",
        price: "",
        category: "Salade",
      });
      setImage("");
    } catch (error) {
      toast.error("failed to add food");
    }
  };
  return (
    <div className="add w-[100%] md:w-[70%] ml-[5vw] mt-4">
      <form onSubmit={formhandeler} className="flex flex-col gap-2.5">
        <div className="add_img_up flex flex-col ">
          <p className="text-xl font-bold">upload image:</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-full h-60 hover:border-8 border-dashed ease-in-out duration-100 border-indigo-300 rounded-lg cursor-pointer"
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            type="file"
            accept="image/*"
            hidden
          />
        </div>
        <div className="add_input_name flex flex-col gap-2">
          <p className="text-xl font-bold text-gray-600">Product Name:</p>
          <input
            className="font-bold px-2 py-1 border-2 border-gray-400 focus:ring-2 focus:outline-none rounded-md ring-indigo-300 "
            type="text"
            placeholder="Name"
            onChange={onChangeHa}
            name="name"
            value={data.name}
          />
        </div>
        <div className="add_input_description flex flex-col gap-2">
          <p className="text-xl font-bold text-gray-600">Description:</p>
          <textarea
            className="font-bold px-2 py-1 border-2 border-gray-400 focus:ring-2 focus:outline-none rounded-md ring-indigo-300 "
            placeholder="Description"
            rows={6}
            onChange={onChangeHa}
            name="description"
            value={data.description}
          />
        </div>

        <div className="add_input_price_category flex  gap-8 flex-wrap justify-between ">
          <div className="category">
            <p className="text-xl font-bold text-gray-600">Category:</p>
            <select
              onChange={onChangeHa}
              name="category"
              value={data.category}
              className="font-bold px-2 py-1 border-2 border-gray-400 focus:ring-2 focus:outline-none rounded-md ring-indigo-300 "
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Sandwich">Sandwich </option>
              <option value="Rolls">Rolls </option>
              <option value="Pasta"> Pasta</option>
            </select>
          </div>
          <div className="price flex flex-col">
            {" "}
            <p className="text-xl font-bold text-gray-600">Price:</p>
            <input
              className=" px-2 py-1 border-2 border-gray-400 focus:ring-2 focus:outline-none rounded-md ring-indigo-300 "
              type="number"
              placeholder="Price"
              onChange={onChangeHa}
              name="price"
            />
          </div>
        </div>
        <div className="add_button_submit flex justify-center">
          <button
            type="submit"
            className="px-3 py-2 w-full rounded-full  hover:-translate-y-1 active:translate-y-0 ease-in-out duration-150 hover:bg-slate-950 bg-slate-800 text-white"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFood;
