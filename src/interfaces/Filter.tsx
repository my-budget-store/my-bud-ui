export interface FilterBase {
  PriceRange: number;
  Brand: string[];
}

export interface MobileFilters extends FilterBase {
  DisplaySize: number;
  Storage: number;
  Ram: number;
  Processor: string;
}
