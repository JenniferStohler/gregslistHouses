import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    Company: { type: String, required: true },
    Position: { type: Number, required: true },
    Pay: { type: Number, required: true },
    imgUrl: { type: String, required: true, default: '//placehold.it/300x300' },
    description: { type: String, minLength: 20 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default Job;