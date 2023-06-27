import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const FormModel = mongoose.model("Form", FormSchema);

export default FormModel;
