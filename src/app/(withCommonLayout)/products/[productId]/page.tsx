import SingleProductDetails from "@/components/UI/SingleProductDetails/SingleProductDetails";
import { ProductId } from "@/types";

export const metadata = {
  title: "Product details",
};

const ProductDetails = async ({ params }: ProductId) => {
  // console.log(params);
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const product = await res.json();
  // console.log(product);

  return (
    <div>
      <SingleProductDetails product={product}></SingleProductDetails>
    </div>
  );
};

export default ProductDetails;
