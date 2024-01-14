import "./styles.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1 className="header">FAST REACT PIZZA CO.</h1>;
}
function Menu() {
  const pizzalist = pizzaData;
  const numPizza = pizzalist.length;
  return (
    <div className="menu">
      <div className="subheading">
        <h2>Our Menu</h2>
      </div>
      <div>
        {numPizza > 0 ? (
          <>
            <p id="menudiscription">
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven , all organic all dilicious
            </p>
            <div className="menu-item">
              {pizzalist.map((e) => {
                return (
                  <Pizza
                    photoName={e.photoName}
                    name={e.name}
                    ingredients={e.ingredients}
                    price={e.price}
                    soldOut={e.soldOut}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p className="menupage">
            we are working on our menu please come later{" "}
          </p>
        )}
      </div>
    </div>
  );
}
function Footer() {
  const Hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = Hour >= openHour && Hour <= closeHour;
  console.log(isOpen);
  return (
    <footer>
      <div className="footer-info">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            we are happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
          </p>
        )}
      </div>
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div>
      <p>
        we are open until {closeHour}:00 please come and visit us or order
        online
      </p>
      <button>Order</button>
    </div>
  );
}
function Pizza(props) {
  return (
    <div className={props.soldOut ? "pizza pizzatwo" : "pizza"}>
      <div>
        <img src={props.photoName} alt={props.name} />
      </div>
      <div className="pizza-info">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT " : props.price}</span>
      </div>
    </div>
  );
}
