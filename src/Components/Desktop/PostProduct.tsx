import { useState, ChangeEvent, FormEvent } from "react";
import { ProductService } from "services/ProductService";
import { useAuth } from "react-oidc-context";

const PostProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [salePrice, setSalePrice] = useState<number | "">("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [quantity, setQuantity] = useState<number | "">("");

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
    formData.append("price", price === "" ? "" : price.toString());
    formData.append("salePrice", salePrice === "" ? "" : salePrice.toString());
    if (uploadedImage) {
      formData.append("uploadedImage", uploadedImage);
    }
    formData.append("quantity", quantity === "" ? "" : quantity.toString());

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
      setPrice("");
      setSalePrice("");
      setUploadedImage(null);
      setQuantity("");

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
        value={price === "" ? "" : price}
        onChange={(e) => setPrice(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
        placeholder="Price"
      />
      <input
        type="number"
        value={salePrice === "" ? "" : salePrice}
        onChange={(e) => setSalePrice(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
        placeholder="Sale Price"
      />
      <input type="file" onChange={handleImageChange} />
      <input
        type="number"
        value={quantity === "" ? "" : quantity}
        onChange={(e) => setQuantity(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
        placeholder="Quantity"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostProduct;
