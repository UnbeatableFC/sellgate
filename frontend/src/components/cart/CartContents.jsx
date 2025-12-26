import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  // Handle adding or subtracting to cart
  const handleAddToCart = (
    productId,
    delta,
    quantity,
    size,
    color
  ) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };
  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(
      removeFromCart({
        productId,
        guestId,
        userId,
        size,
        color,
      })
    );
  };

  return (
    <div>
      {cart?.products?.map((p, index) => (
        <div
          key={index}
          className="flex justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={p.image}
              alt={p.name}
              className="w-16 h-20 sm:w-20 sm:h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{p.name}</h3>
              <p className="text-sm text-gray-500">
                size: {p.size} | color: {p.color}
              </p>
              <div className="flex items-center mt-2">
                <button
                  className="border rounded px-2 py-1 text-lg font-medium"
                  onClick={() =>
                    handleAddToCart(
                      p.productId,
                      -1,
                      p.quantity,
                      p.size,
                      p.color
                    )
                  }
                >
                  -
                </button>
                <span className="mx-4">{p.quantity}</span>
                <button
                  className="border rounded px-2 py-1 text-lg font-medium"
                  onClick={() =>
                    handleAddToCart(
                      p.productId,
                      1,
                      p.quantity,
                      p.size,
                      p.color
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium">₦{p.price.toLocaleString()}</p>
            <button
            className="cursor-pointer"
              onClick={() =>
                handleRemoveFromCart(p.productId, p.size, p.color)
              }
            >
              <RiDeleteBin3Line className="mt-2 size-6 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
