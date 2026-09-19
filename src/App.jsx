import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  console.log(">>>>> App component rendered <<<<<");
  return (
    <div>
      <Pizza
        name="Pepperoni Pizza"
        description="Classic Pizza with pep"
        image={"/public/pizzas/pepperoni.webp"}
        style
      />
      <Pizza
        name="Margaritta Pizza"
        description="Margariiiiiiiiiiiiiiiiiiita"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Persian Pizza"
        description="Pizza that modified for persian taste"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="Pizza Shab"
        description="A specific thick pizza."
        image={"/public/pizzas/sicilian.webp"}
      />
      <Pizza
        name="Ronin"
        description="Very thick and puffy pizza."
        image={"/public/pizzas/classic_dlx.webp"}
      />
      <Pizza
        name="Pizza Kook Makhsoos"
        description="Kooki mooki pizza"
        image={"/public/pizzas/calabrese.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
