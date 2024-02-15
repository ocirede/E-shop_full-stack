import ProductCard from "../components/ProductCard";
import { useProductsContext } from "../context/ProductContext";

const HomePage = () => {
  const { products } = useProductsContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-40  mb-40 ">
      {
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  );
};

export default HomePage;

