import React from "react";
import { ProductFiltersEntity } from "interfaces/Filter";
import { useLoaderData, useParams } from "react-router";

export const ProductFilters: React.FC = () => {
  const [productsData, filtersData] = useLoaderData() as [
    Product[],
    ProductFiltersEntity
  ];
  const { category } = useParams();

  if (!filtersData || !filtersData.productFiltersData) {
    return null;
  }

  return (
    <div className="filter-v">
      {Object.entries(filtersData.productFiltersData).map(
        ([propertyName, values]) => (
          <div className="filter-group" key={propertyName}>
            <h3 className="filter-heading">{propertyName}</h3>
            <ul className="filter-list">
              {values.map((value: string) => (
                <li key={value}>
                  <input type="checkbox" id={value} />
                  <label>{value}</label>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
