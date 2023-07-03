import { ObjectId } from 'mongodb';

interface FilterValue {
  label: string;
  min?: number;
  max?: number;
}

export interface ProductFiltersEntity {
  productFiltersId: ObjectId;
  productFiltersData: Record<string, string[]>;
}
