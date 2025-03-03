import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const SignupData = mongoose.model('SignupData', SignupSchema);

export default SignupData;