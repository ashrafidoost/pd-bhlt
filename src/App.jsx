import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  console.log(">>>>> App component rendered <<<<<");
  return (
    <div>
      <Pizza
        name="Pepperoni Pizza"
        description="Classic Pizza with pep"
        style
      />
      <Pizza
        name="Margaritta Pizza"
        description="Margariiiiiiiiiiiiiiiiiiita"
      />
      <Pizza
        name="Persian Pizza"
        description="Pizza that modified for persian taste"
      />
      <Pizza name="Pizza Shab" description="A specific thick pizza." />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
