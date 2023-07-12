import { useState, ChangeEvent, FormEvent } from "react";
import { productService } from "services/productService";
import { useAuth } from "react-oidc-context";
import "styles/forms.css";

const ProductAdmin = () => {
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
      const response = (await productService.createProduct(
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
    <>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className="form-l form-content">
        <br />
        <input
          type="text"
          className="text-input form-content"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          className="text-input form-content"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <br />
        <input
          type="number"
          className="text-input form-content"
          value={price === "" ? "" : price}
          onChange={(e) =>
            setPrice(e.target.value === "" ? "" : parseInt(e.target.value, 10))
          }
          placeholder="Price"
        />
        <br />
        <input
          type="number"
          className="text-input form-content"
          value={salePrice === "" ? "" : salePrice}
          onChange={(e) =>
            setSalePrice(
              e.target.value === "" ? "" : parseInt(e.target.value, 10)
            )
          }
          placeholder="Sale Price"
        />
        <br />
        <input
          type="file"
          className="text-input form-content"
          onChange={handleImageChange}
        />
        <br />
        <input
          type="number"
          className="text-input form-content"
          value={quantity === "" ? "" : quantity}
          onChange={(e) =>
            setQuantity(
              e.target.value === "" ? "" : parseInt(e.target.value, 10)
            )
          }
          placeholder="Quantity"
        />
        <br />
        <input
          type="submit"
          className="text-input form-content"
          value="Proceed to Add"
        />
        <br />
      </form>
    </>
  );
};

export default ProductAdmin;
