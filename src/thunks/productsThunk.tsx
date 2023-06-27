import { setLoading, setProducts, setError } from "redux/slices/productsSlice";
import { ProductService } from "../services/ProductService";

export const fetchProducts = () => {
  return async (dispatch:any) => {
    dispatch(setLoading(true));

    try {
      const products = await ProductService.getProducts();
      dispatch(setProducts(products));
    } catch (error:any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
