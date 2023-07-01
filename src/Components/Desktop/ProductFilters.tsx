import { FilterBase } from "interfaces/Filter";
import { Product } from "interfaces/Product";
import { useLoaderData } from "react-router";

export const ProductFilters = () => {
  const [productsData, filtersData] = useLoaderData() as Array<
    Product[] | FilterBase[]
  >;
  return (
    <>
      <span className="filter-vl">
        {Object.entries(filtersData as FilterBase[]).map(
          ([propertyName, values]: [string, any]) => (
            <div key={propertyName}>
              <label className="label-l">{propertyName}</label>
              <ul>
                {values.map((value: any) => (
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
