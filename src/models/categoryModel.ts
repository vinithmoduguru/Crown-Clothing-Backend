import mongoose, { Document, Schema, Model } from "mongoose";

interface ICategory extends Document {
  title: string;
  imageUrl: string;
  isActive: boolean;
}

const CategorySchema: Schema<ICategory> = new Schema(
  {
    title: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Category: Model<ICategory> = mongoose.model<ICategory>(
  "Category",
  CategorySchema
);

export default Category;
