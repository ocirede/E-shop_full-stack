import Products from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const filter = {};
    console.log("query",req.query)
    if (req.query.category.toLowerCase() !== "all") {
      filter.category = req.query.category;
    }
    console.log("filter",filter)
    const allProducts = await Products.find(filter);
    res.json(allProducts);
  } catch (error) {
    console.log("🚀 ~ error in getProducts:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const { productId } = req.params;

    const updateProduct = await Products.findById(productId);
    updateProduct.quantity -= 1;
    await updateProduct.save();
    res.send(updateProduct);
  } catch (error) {
    console.log("🚀 ~ error in updateProduct:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const reUpdateProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    const { amount } = req.body[0];
    const reUpdateProduct = await Products.findById(productId);
    reUpdateProduct.quantity += amount;
    await reUpdateProduct.save();
    res.send(reUpdateProduct);
  } catch (error) {
    console.log("🚀 ~ error in reUpdateProduct:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
