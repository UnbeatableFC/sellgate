import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const CardDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const userId = user ? user._id : null;

  const handleCheckOut = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="size-6 text-gray-600" />
        </button>
      </div>
      {/* Cart Content */}
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart && cart?.products?.length > 0 ? (
          /* Component for Cart Content */
          <CartContents
            cart={cart}
            userId={userId}
            guestId={guestId}
          />
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* CheckOut Button */}
      <div className="p-4 bg-white sticky bottom-0">
        {cart && cart?.products?.length > 0 && (
          <>
            <button
              onClick={handleCheckOut}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
            >
              Checkout
            </button>
            <p className="text-sm tracking-tighter text-gray-400 mt-2 text-justify">
              Shipping, taxes, and discount codes calculated at
              checkout.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardDrawer;
