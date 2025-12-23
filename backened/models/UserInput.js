import mongoose from "mongoose";
const [Schema, model] = mongoose; 
// import --> define Schema --> Create Model 
const userInputSchema = new Schema(
  {
    mood: {
      type: String,
      required: true,
      enum: ["adventure", "relaxed", "spiritual", "exploration"],
    },

    budgetRange: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },

    days: {
      type: Number,
      required: true,
      min: 1,
      max: 30,
    },
    groupType: { // not implemented logic , or schema in destination. 
      type: String,
      required: true,
      enum: ["solo", "duo", "family", "friends"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const UserInput = model('UserInput', userInputSchema);
export default UserInput;