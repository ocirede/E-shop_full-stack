import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext(null);
export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productCounts, setProductCounts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

 const baseURL = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const fetchProducts = async (category = "all") => {
    try {
      const response = await axios.get(
        baseURL + `/products/getall?category=${category}`
      );
      console.log("===>", response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching the products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    const storedItems = localStorage.getItem("ShoppingCart");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setSelectedProduct(parsedItems);
    }
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const newProduct = await axios.put(
        baseURL + `/products/update/${productId}`
      );

      function consolidateProducts(products) {
        return Object.values(
          products.reduce((acc, { amount = 1, ...item }) => {
            if (!acc[item._id]) {
              acc[item._id] = { ...item, amount };
            } else {
              acc[item._id].amount += amount;
            }
            return acc;
          }, {})
        );
      }

      const updatedSelectedProduct = [...selectedProduct, newProduct.data];
      const output = consolidateProducts(updatedSelectedProduct);

      setSelectedProduct(output);
      localStorage.setItem("ShoppingCart", JSON.stringify(output));

      setProductCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: (prevCounts[productId] || 0) + 1,
      }));

      const updatedProducts = products.map((product) => {
        if (product._id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };

  const deleteItem = async (productId) => {
    const filteredProduct = selectedProduct.filter(
      (product) => product._id !== productId
    );
    setSelectedProduct(filteredProduct);
    setProductCounts(0);
    localStorage.setItem("ShoppingCart", JSON.stringify(filteredProduct));
    try {
      const reUpdatedProduct = await axios.put(
        baseURL + `/products/reupdate/${productId}`,
        selectedProduct
      );
      fetchProducts();
    } catch (error) {
      console.error("Error Reupdating product quantity:", error);
    }
  };

  const handleCheckout = () => {
    navigate("/orders");
  };

  const placeOrder = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    setTimeout(() => {
      navigate("/successufulpayment");
      setIsRedirecting(false);
    }, 4000);
    localStorage.removeItem("ShoppingCart");
    setSelectedProduct([])
    e.target.reset();
  };

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    fetchProducts(category);
    navigate("/");
  };

  const handleResetCategoryClick = () => {
    fetchProducts();
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleAddToCart,
        productCounts,
        selectedProduct,
        deleteItem,
        handleCheckout,
        isRedirecting,
        placeOrder,
        fetchProducts,
        handleCategoryClick,
        isOpen,
        setIsOpen,
        handleResetCategoryClick,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
