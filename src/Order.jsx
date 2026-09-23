import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";

const intl = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useState([]);
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

  console.log(pizzaType);
  const price = selectedPizza
    ? intl.format(selectedPizza["sizes"][pizzaSize])
    : "0";

  return (
    <div className="order">
      <h2>Order Page</h2>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={pizzaType}
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
        </div>

        <div className="order-pizza">
          <Pizza
            name={selectedPizza ? selectedPizza.name : "Loading..."}
            discription={
              selectedPizza ? selectedPizza.discription : "Loading..."
            }
            image={selectedPizza ? selectedPizza.image : "Loading..."}
          />
          <p>{selectedPizza ? price : "Loading..."}</p>
        </div>
      </form>
      {loading ? <h2>Loading...</h2> : <Cart cart={cart} />}
    </div>
  );
}
