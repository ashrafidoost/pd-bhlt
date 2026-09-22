import { useState, useEffect } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  const selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJSON = await pizzaRes.json();
    setPizzaTypes(pizzaJSON);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  console.log(pizzaType, pizzaSize);
  return (
    <div className="order">
      <h2>Order Page</h2>
      <hr />
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              style={{ width: 300 }}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="pizza-size">Pizza Size</label>
          <div>
            <span>
              <input
                type="radio"
                checked={pizzaSize === "S"}
                name="pizza-size"
                value="S"
                id="pizza-s"
                onChange={(e) => setPizzaSize(e.target.value)}
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                type="radio"
                checked={pizzaSize === "M"}
                name="pizza-size"
                value="M"
                id="pizza-m"
                onChange={(e) => setPizzaSize(e.target.value)}
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                type="radio"
                checked={pizzaSize === "L"}
                name="pizza-size"
                value="L"
                id="pizza-l"
                onChange={(e) => setPizzaSize(e.target.value)}
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name={selectedPizza ? selectedPizza.name : "Loading..."}
              discription={
                selectedPizza ? selectedPizza.discription : "Loading..."
              }
              image={selectedPizza ? selectedPizza.image : "Loading..."}
            />
            <p>
              {selectedPizza
                ? intl.format(selectedPizza["sizes"][pizzaSize])
                : "Loading..."}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
