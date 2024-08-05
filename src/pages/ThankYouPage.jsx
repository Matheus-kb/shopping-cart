import { useLocation, useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state.cartItems;

  return (
    <div>
      <h1>Obrigado por comprar conosco!</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity} unidade(s)
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default ThankYouPage;
