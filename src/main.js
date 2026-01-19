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
// {} = objekt (property = property name (key) + (value))

//====================================================

// 1. Skapa en produktlista (array med objekt)
const products = [
  {
    // objektets egenskaper
    name: "Produktnamn 1", // key (string) + value (string)
    price: 15, // key (string) + value (number)
    category: "heminredning",
  },
  {
    name: "Produktnamn 2",
    price: 10,
    category: "",
  },
  {
    name: "Produktnamn 3",
    price: 19,
    category: "",
  },
  {
    name: "Produktnamn 4",
    price: 15,
    category: "",
  },
  {
    name: "Produktnamn 5",
    price: 15,
    category: "kläder",
  },
  {
    name: "Produktnamn 6",
    price: 15,
    category: "elektronik",
  },
  {
    name: "Produktnamn 7",
    price: 15,
    category: "heminredning",
    rating: 4,
  },
  {
    name: "Produktnamn 8",
    price: 15,
    category: "",
  },
  {
    name: "Produktnamn 9",
    price: 15,
    category: "",
  },
  {
    name: "Produktnamn 10",
    price: 15,
    category: "",
  },
];

// 2. Välj vilka element jag vill koppla till arrayen
const productName = document.querySelectorAll(".product-name");
const productPrice = document.querySelectorAll(".product-price");
const productCategory = document.querySelectorAll(".product-category");
/**
 * Jag deklarerar en variabel som heter productName
 * Uttrycket returnerar ett värde
 *
 *
 *
 *
 */

/* 
Jag vill koppla alla element med klassen 'product.name' till arrayen.
Var i arrayen?
Jo, till varje objekt med key-property 'name' 

Hur gör jag då för att koppla alla element med klassen 'product.name' 
till varje objekt med key-egenskapen 'name'?




då deklarerar jag variabeln productName och ger den ett värde,
värdet är elementet med klassen 'product.name'

Nu ska jag använda variabeln jag just skapade för att ??

 */
console.log(products);

// 3. Koppla varje objekt till rätt element men en loop
for (let i = 0; i < products.length; i++) {
  productName[i].textContent = products[i].name;
  productPrice[i].textContent = products[i].price + " kr";
  productCategory[i].textContent = products[i].category;
}
// for = loop
// let = deklarerar en variabel
// i = variabelnamn
// 0 = startvärde

// 4. Nu kan jag se..
