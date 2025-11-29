import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProduct = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15000,
      image: "https://picsum.photos/500/500?random=39",
    },
    {
      productId: 2,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15000,
      image: "https://picsum.photos/500/500?random=39",
    },
    {
      productId: 3,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15000,
      image: "https://picsum.photos/500/500?random=39",
    },
    {
      productId: 4,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15000,
      image: "https://picsum.photos/500/500?random=39",
    },
  ];
  return (
    <div>
      {cartProduct.map((p, index) => (
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
                <button className="border rounded px-2 py-1 text-lg font-medium">
                  -
                </button>
                <span className="mx-4">{p.quantity}</span>
                <button className="border rounded px-2 py-1 text-lg font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
            <div>
                <p className="font-medium">₦{p.price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className="mt-2 size-6 text-red-600" />
                </button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
