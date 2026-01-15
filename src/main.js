import "./styles/style.scss";

//====================================================
//========= NAVIGATION ===============================
//====================================================

const navBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navbar");

navBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle("active");
} // const toggleMenu = function() {...};

//====================================================
//========= PRODUCTS =================================
//====================================================

// const = deklarerar en variabel
// products = variabelnamn
// [] = array (lista)
// {} = objekt (property = key + value)

//====================================================

// 1. Skapa en produktlista (array med objekt)
const products = [
  {
    // objektets egenskaper
    name: "Produktnamn 1", // key (string) + value (string)
    price: 15, // key (string) + value (number)
  },
  {
    name: "Produktnamn 2",
    price: 10,
  },
  {
    name: "Produktnamn 3",
    price: 19,
  },
  {
    name: "Produktnamn 4",
    price: 15,
  },
  {
    name: "Produktnamn 5",
    price: 15,
  },
  {
    name: "Produktnamn 6",
    price: 15,
  },
  {
    name: "Produktnamn 7",
    price: 15,
  },
  {
    name: "Produktnamn 8",
    price: 15,
  },
  {
    name: "Produktnamn 9",
    price: 15,
  },
  {
    name: "Produktnamn 10",
    price: 15,
  },
];

console.log(products);

// 2. Välj vilka element jag vill koppla till arrayen
const productName = document.querySelectorAll(".product-name");
const productPrice = document.querySelectorAll(".product-price");

// 3. Koppla varje objekt till rätt element men en loop
for (let i = 0; i < products.length; i++) {
  productName[i].textContent = products[i].name;
  productPrice[i].textContent = products[i].price + " kr";
}
// for = loop
// let = deklarerar en variabel
// i = variabelnamn
// 0 = startvärde
