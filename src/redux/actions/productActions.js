// productActions.js
export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsStart());
  
      try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };
  
  export const fetchProductsStart = () => {
    return { type: 'FETCH_PRODUCTS_START' };
  };
  
  export const fetchProductsSuccess = (products) => {
    return { type: 'FETCH_PRODUCTS_SUCCESS', payload: products };
  };
  
  export const fetchProductsFailure = (error) => {
    return { type: 'FETCH_PRODUCTS_FAILURE', payload: error };
  };
  