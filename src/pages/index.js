import { Inter } from "next/font/google";
import { getProductsInCollection } from "../../lib/shopify";
import ProductList from "../components/ProductList.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
