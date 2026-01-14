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

// const = deklaration
// products = variabelnamn
// [] = array (lista)
// {} = objekt (property = key + value)

//====================================================

// 1. Skapa en produktlista (array med objekt)
const products = [
  {
    // objektets egenskaper
    name: "Jordgubbsmunk", // key (string) + value (string)
    price: 15, // key (string) + value (number)
  },
  {
    name: "Chokladmunk",
    price: 10,
  },
  {
    name: "Vaniljmunk",
    price: 19,
  },
  {
    name: "Sockermunk",
    price: 15,
  },
];

console.log(products);

// 2. Välj vilka element jag vill koppla till arrayen
const productName = document.querySelectorAll(".product-name");
const productPrice = document.querySelectorAll(".product-price");

console.log(productName, productPrice);

// 3. Koppla varje objekt till rätt element men en loop
for (let i = 0; i < products.length; i++) {
  productName[i].textContent = products[i].name;
  productPrice[i].textContent = products[i].price + " kr";
}

// 4. Nu kan jag se produkterna i webbläsaren
