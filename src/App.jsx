import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./order";

const App = () => {
  console.log(">>>>> App component rendered <<<<<");
  return (
    <StrictMode>
      <div>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
