import { ObjectId } from "mongodb";

export interface Category {
  _id: ObjectId;
  categoryName: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  subCategoryId: string;
  subCategoryName: string;
}
