import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';
import { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    }


    return (
        <div className={styles.productItem}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>$: {product.price}</p>
            </div>
            <div className={styles.productActions}>
                <select name="quantidade" id="quantidade" className={styles.productis} onChange={handleQuantityChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button className={styles.buyButton} onClick={() => onAddToCart(product, quantity)}>Comprar</button>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;
