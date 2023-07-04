import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ProductService } from "services/ProductService";
import { useAuth } from "react-oidc-context";

const PostProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [quantity, setQuantity] = useState(0);
  const auth = useAuth();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUploadedImage(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price.toString());
    formData.append("salePrice", salePrice.toString());
    if (uploadedImage) {
      formData.append("uploadedImage", uploadedImage);
    }
    formData.append("quantity", quantity.toString());

    try {
      const response = (await ProductService.createProduct(
        auth.user?.access_token,
        formData
      )) as Product;

      if (response) {
        return <div>Product created successfully!</div>;
      }

      setName("");
      setCategory("");
      setPrice(0);
      setSalePrice(0);
      setUploadedImage(null);
      setQuantity(0);

      console.log("Product data submitted successfully!");
    } catch (error) {
      console.error("Error submitting product data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Price"
      />
      <input
        type="number"
        value={salePrice}
        onChange={(e) => setSalePrice(parseFloat(e.target.value))}
        placeholder="Sale Price"
      />
      <input type="file" onChange={handleImageChange} />
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (isNaN(value)) {
            setQuantity(0);
          } else {
            setQuantity(value);
          }
        }}
        placeholder="Quantity"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostProduct;
