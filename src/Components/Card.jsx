
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart, handleRemoveItem } from "../Redux/ProductReducer";

function Card({ Details }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  const isInCart = () => cart.some(item => item.id === Details.id);
  const handleClick = () => {
    console.log('Details.id:', Details.id);
    console.log('cart:', cart);
  
    const actionType = isInCart() ? 'remove' : 'add';
    dispatch(actionType === 'remove' ? handleRemoveItem(Details) : handleAddToCart(Details));
  };
  

  const badgeStyle = {
    top: '0.5rem',
    right: '0.5rem',
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className={`badge bg-dark text-white position-absolute`} style={badgeStyle}>
          {Details.salebadge}
        </div>
        <img className="card-img-top" style={{ height:'200px'}} src={Details.img} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{Details.name}</h5>
            {Details.review && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(5)].map((_, index) => (
                  <BsStarFill key={index} className={Details.review} />
                ))}
              </div>
            )}
            <span>${Details.price}</span>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className={isInCart() ? "btn btn-danger mt-auto" : "btn btn-outline-dark mt-auto"} onClick={handleClick}>
              {isInCart() ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
