import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./components/cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          {/* User Layout Routes */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="collections/:collection"
            element={<CollectionPage />}
          />
          <Route path="product/:id" element ={<ProductDetails />} />
          <Route path="checkout" element = {<Checkout />} />
          <Route path="order-confirmation" element ={<OrderConfirmationPage />} />
        </Route>

        <Route>{/* Admin Layout */}</Route>
      </Routes>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
};

export default App;
