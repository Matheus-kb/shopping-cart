import ProductsDetails from '../data/products_mock.json';
import ProductItem from '../components/ProductItem';
import styles from './Catalog.module.css';
import PropTypes from 'prop-types';

const Catalog = ({onAddToCart}) => {
    return ( <div>
        <h1>Catalogo de produtos</h1>
        <div className={styles.productMap}>
           {ProductsDetails.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={onAddToCart}/>
           ))}
        </div>
    </div> );
}
 
export default Catalog;

Catalog.propTypes = {
    onAddToCart: PropTypes.func.isRequired
};