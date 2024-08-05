import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

const CartItem = ({ product, quantity, onRemoveToCart, onUpDateCart }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItems}>
        <img
          className={styles.cartItemImage}
          src={product.image}
          alt={product.name}
        />
        <div className={styles.cartItemDetails}>
          <h3 className={styles.cartItemName}>{product.name}</h3>
          <p className={styles.cartItemPrice}>
            Total a pagar $: {(Number(product.price) * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div className={styles.cartItemActions}>
        <select
          name="quantidade"
          id="quantidade"
          className={styles.cartItemSelect}
          value={quantity}
          onChange={(event) => onUpDateCart(product, Number(event.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button
          className={styles.cartItemRemoveButton}
          onClick={() => onRemoveToCart(product)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemoveToCart: PropTypes.func.isRequired,
  onUpDateCart: PropTypes.func.isRequired,
};

export default CartItem;
