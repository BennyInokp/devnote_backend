import express from "express";
import FormModel from "../model/form.js";
//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

// import auth from "../middleware/auth.js";

const routesForm = express.Router();
// creating form
routesForm.post("/create-form", async (req, res) => {
  const { title, description } = req.body;
  try {
    await FormModel.create({ title, description }).then((form) => {
      res.status(201).json({ message: "Form created successfully", form });
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Form not successful", error: err.message });
  }
});
// get form
routesForm.get("/getForm", async (req, res) => {
  try {
    const data = await FormModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
export default routesForm;
