import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOutButton = ({cartItems, setCartItems}) => {
    const navigate = useNavigate();
    const onCheckOut = () => {
        if (cartItems.length === 0) {
          toast.error("Adicione produtos ao carrinho para finalizar a compra");
          return;
        } else {
          setCartItems([]);
          toast.success("Compra realizada com sucesso!");
          navigate("/tahnk-you", { state: { cartItems } });
        }
      };
    return ( <div>
        {cartItems.length > 0 && (<button onClick={onCheckOut}>Finalizar compra</button>) || null}
        
    </div> );
}

CheckOutButton.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired
};
 
export default CheckOutButton;