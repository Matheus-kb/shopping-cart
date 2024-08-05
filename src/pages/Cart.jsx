import PropTypes from "prop-types";
import CartItem from "../components/CartItem";
import CheckOutButton from "../components/CheckOutButton";

const Cart = ({
  Products,
  onRemoveToCart,
  onUpDateCart,
  cartItems,
  setCartItems,
}) => {
  const total = Products.reduce((acc, product) => {
    return acc + product.product.price * product.quantity;
  }, 0);

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 && (<p>Carrinho vazio</p>) || (
        <div>
          {Products.map((product) => (
            <CartItem
              key={product.product.id}
              product={product.product}
              quantity={product.quantity}
              onRemoveToCart={onRemoveToCart}
              onUpDateCart={onUpDateCart}
            />
          ))}
          <p>Total a pagar: $ {total.toFixed(2)}</p>
          <CheckOutButton cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  Products: PropTypes.array.isRequired,
  onRemoveToCart: PropTypes.func.isRequired,
  onUpDateCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
  onCheckOut: PropTypes.func.isRequired,
};

export default Cart;
