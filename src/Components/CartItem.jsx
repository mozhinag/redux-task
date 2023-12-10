//CartItem.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart, handleRemoveItem ,handleDecreaseQuantity} from "../Redux/ProductReducer"
const CartItem = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);
  const total = cart.reduce((acc, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return acc + itemTotal;
  }, 0);

  return (
    <div>
      <div className="productContainer-fluid">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
              
                  <div className="fw-bold">{item.name}</div>
                  <div>${item.price * item.quantity}</div>
                  <div>Quantity: {item.quantity}</div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    className="btn btn-sm btn-primary me-md-2"
                    type="button"
                    onClick={() => dispatch(handleAddToCart(item))}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-primary me-md-2"
                    type="button"
                    onClick={() => dispatch(handleDecreaseQuantity(item))}
                  >
                    -
                  </button>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => dispatch(handleRemoveItem(item))}>
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart</p>
        )}

        <span>

        <h2>Total: ${total.toFixed(2)}</h2>

        </span>
      </div>
    </div>
  );
};

export default CartItem;
