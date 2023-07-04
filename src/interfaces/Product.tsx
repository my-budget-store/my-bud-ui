enum ProductCategory {
  // Define your product categories here
}

interface Product {
  productId: number;
  userId: string;
  name: string;
  category: string;
  price: number;
  salePrice: number;
  uploadedImage: File;
  image: ArrayBuffer;
  quantity: number;
}
