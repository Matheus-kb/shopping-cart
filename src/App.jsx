import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import ThankYouPage from "./pages/ThankYouPage";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    if (cartItems.find((item) => item.product.id === product.id)) {
      toast.info(`Quantidade de ${product.name} atualizado no carrinho`);
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        })
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
      toast.success(`${product.name} adicionado ao carrinho`);
    }
  };

  const onRemoveToCart = (product) => {
    setCartItems(cartItems.filter((item) => item.product.id !== product.id));
    toast.error(`${product.name} removido do carrinho`);
  };

  const onUpDateCart = (product, quantity) => {
    toast.info(`Quantidade de ${product.name} atualizado com sucesso!`);
    setCartItems(
      cartItems.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      })
    );
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog onAddToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              Products={cartItems}
              onRemoveToCart={onRemoveToCart}
              onUpDateCart={onUpDateCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/tahnk-you" element={<ThankYouPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
