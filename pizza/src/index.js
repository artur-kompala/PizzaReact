import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "img/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "img/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "img/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "img/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "img/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "img/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
    
  );
}

function Header(){
  return(
    <header className='header'>
      <h1 className='h1'>Fast React Pizza Co.</h1>
    </header>
    
  )
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzas && (<ul className='pizzas'>
        {pizzaData.map(pizza=><Pizza pizzaObj = {pizza} key={pizza.name}/>)}
      </ul>)}
      
      
    </main>
  
  )
}

function Pizza(props){
  return(
    <li className='pizza'>
      <img className="pizza" src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3 className='pizza'>{props.pizzaObj.name}</h3>
        <p className='pizza'>{props.pizzaObj.ingredients}</p>
        <span className='pizza'>{props.pizzaObj.price + 2 + "$"}</span>
      </div>
      
    </li>
  );
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;  
  
  return (
  <footer className='footer'>
    <div className='order'>
      {isOpen ? "We're currently open!" : "We're currently close!"}
      <button className='btn'>Order</button>
    </div>
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



