import ValueSchema from "../models/Value";
import HouseSchema from "../models/Houses"
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Houses = mongoose.model("house", HouseSchema);
}

export const dbContext = new DbContext();
