import { ObjectId } from 'mongodb';

export interface ProductFiltersEntity {
  productFiltersId: ObjectId;
  productFiltersData: Record<string, string[]>;
}
