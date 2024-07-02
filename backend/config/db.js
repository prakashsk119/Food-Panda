import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://prakashsk119:1234567890@cluster0.8tdjlmx.mongodb.net/FoodPanda')
    .then(()=>console.log("DB Connected"))
}