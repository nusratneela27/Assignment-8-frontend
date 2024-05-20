import SingleProductDetails from "@/components/UI/SingleProductDetails/SingleProductDetails";
import { ProductId, Products } from "@/types";

export const metadata = {
  title: "Product details",
};

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/women-wear");
  const products = await res.json();
  return products.slice(0, 5).map((product: Products) => ({
    productId: product._id,
  }));
};

const ProductDetails = async ({ params }: ProductId) => {
  // console.log(params);
  const res = await fetch(
    `http://localhost:5000/women-wear/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();
  // console.log(product);

  return (
    <div>
      <SingleProductDetails product={product}></SingleProductDetails>
    </div>
  );
};

export default ProductDetails;
