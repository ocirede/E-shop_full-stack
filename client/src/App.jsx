import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserProvider from "./context/UserContext";
import ConfirmedEmail from "./pages/ConfirmedEmail";
import ForgotPassword from "./pages/ForgotPassword";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsProvider from "./context/ProductContext";
import ShoppingPage from "./pages/ShoppingPage";
import SuccessfulPayment from "./pages/SuccessfulPayment";

function App() {
  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/orders" element={<OrdersPage/>}/>
            <Route path="/shoppingpage" element={<ShoppingPage/>}/>
            <Route path="/successufulpayment" element={<SuccessfulPayment/>}/>

          </Route>

          <Route element={<MainLayout />}>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/confirmedemail/:token" element={<ConfirmedEmail/>}/>
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
          </Route>
        </Routes>
        </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
