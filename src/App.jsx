import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  console.log(">>>>> App component rendered <<<<<");
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's - Order Now!</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
