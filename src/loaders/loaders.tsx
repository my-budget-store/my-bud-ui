import { Product } from "interfaces/Product";
import { ProductService } from "services/ProductService";
import { fetchProducts } from "thunks/productsThunk";

// import { useSelector, useDispatch } from "react-redux";

// const dispatch = useDispatch();
// const { products, loading, error } = useSelector((state) => state.product);

// useEffect(() => {
//   dispatch(fetchProducts());
// }, [dispatch]);

// // productActions.js
// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchProductsStart());

//     try {
//       const response = await fetch("your-api-endpoint");
//       const data = await response.json();
//       dispatch(fetchProductsSuccess(data));
//     } catch (error) {
//       dispatch(fetchProductsFailure(error.message));
//     }
//   };
// };

// export const fetchProductsStart = () => {
//   return { type: "FETCH_PRODUCTS_START" };
// };

// export const fetchProductsSuccess = (products) => {
//   return { type: "FETCH_PRODUCTS_SUCCESS", payload: products };
// };

// export const fetchProductsFailure = (error) => {
//   return { type: "FETCH_PRODUCTS_FAILURE", payload: error };
// };

export const productsLoader = () => {
  return async () => {
    return await ProductService.getProducts();
  };
  //   const dispatch = useDispatch();
  //   const products = useSelector((state) => state.products.products);
  //   const loading = useSelector((state) => state.products.loading);
  //   const error = useSelector((state) => state.products.error);
  // fetchProducts();
};
