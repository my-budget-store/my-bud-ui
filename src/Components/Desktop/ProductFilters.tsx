import { ProductFiltersEntity } from "interfaces/Filter";
import { useLoaderData } from "react-router";

export const ProductFilters = () => {
  const [productsData, filtersData] = useLoaderData() as [
    Product[],
    ProductFiltersEntity
  ];

  if (!filtersData || !filtersData.productFiltersData) {
    // Handle the case when filtersData or productFiltersData is undefined or null
    return null; // Or render a loading indicator or error message
  }

  return (
    <>
      <span className="filter-vl">
        {Object.entries(filtersData.productFiltersData).map(
          ([propertyName, values]: [string, string[]]) => (
            <div key={propertyName}>
              <label className="label-l">{propertyName}</label>
              <ul>
                {values.map((value: string) => (
                  <li key={value}>
                    <input type="checkbox" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </span>
    </>
  );
};
