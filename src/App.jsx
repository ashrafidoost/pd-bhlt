import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  console.log(">>>>> App component rendered <<<<<");
  return (
    <StrictMode>
      <div>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
