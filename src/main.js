import './styles/style.scss';

//=======================================================
//========= NAVIGATION ==================================
//=======================================================

const navBtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('.navbar');

navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle('active');
} // const toggleMenu = function() {...};

//=======================================================
//========= SHOPPING-CART ===============================
//=======================================================

const cart = [];

//====================================================================
//========= PRODUCTS =================================================
//====================================================================

/**
 * Jag har skapat en variabel åt min produktlista.
 * Jag kommer använda variabeln senare till att koppla min <section id=products>.
 */

// Variabel (variabelnamn = värde)

// const = deklarerar en variabel
// [] = Array (lista)
// {} = Objekt (property = property name (key) + (value))

const products = [
  // <article>
  {
    id: 1,
    name: 'Doftljus', // <h2></h2>
    price: 109, // <p></p>
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 2,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 3,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 4,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 5,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 6,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 7,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 8,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  // </article>
  // <article>
  {
    id: 9,
    name: 'Muggar',
    price: 99,
    rating: 3,
    category: 'muggar',
    img: {
      src: './img/rod-kopp.jpeg',
      width: 886,
      height: 886,
      alt: 'skapa alt-text',
    },
  },
  // </article>
  // <article>
  {
    id: 10,
    name: 'Muggar',
    price: 99,
    rating: 3,
    category: 'muggar',
    img: '',
  },
  // </article>
];

//=========================================================================================================================================
//========= FILTER BUTTONS ================================================================================================================
//=========================================================================================================================================

/**
 * Jag har skapat variabler för varje filtrera-knapp i <main>,
 * jag har använt document.querySelector till att välja vilka element som ska höra till vilka variabler.
 */

const doftljusFilterBtn = document.querySelector('#doftljusFilterBtn'); // <-- HÄR sker kopplingen mellan variabeln och elementet (knappen)
const doftpinnarFilterBtn = document.querySelector('#doftpinnarFilterBtn');
const muggarFilterBtn = document.querySelector('#muggarFilterBtn');
const showAllFilterBtn = document.querySelector('#showAllFilterBtn');

/**
 * Sedan har jag lagt till en event-lyssnare till varje variabel som ska vänta tills någon "klickar" på knappen
 * och där med kunna trigga en funktion.
 */

// namnetPåVariabeln.addEventListener('click', namnetPåFunktionen);
doftljusFilterBtn.addEventListener('click', filterByDoftljusCategory); // <-- HÄR sker kopplingen mellan funktionen och knappen
doftpinnarFilterBtn.addEventListener('click', filterByDoftpinnarCategory); // <-- HÄR
muggarFilterBtn.addEventListener('click', filterByMuggarCategory); // <-- HÄR
showAllFilterBtn.addEventListener('click', showAllProducts); // <-- HÄR

/**
 * Själva funktionen ser du under min kommentars-banner "(FUNCTIONS) FILTER BUTTONS".
 */

//=========================================================================================================================================
//========= SORT BUTTONS ==================================================================================================================
//=========================================================================================================================================

/**
 * Jag har skapat variabler för varje sorterings-knapp i <main>,
 * jag har använt document.querySelector till att välja vilka element som ska höra till vilka variabler.
 */

// const namnetPåVariabeln = document.querySelector('#namnetPåElementetsId');
const sortByNameBtn = document.querySelector('#sortByNameBtn');
const sortByPriceBtn = document.querySelector('#sortByPriceBtn');

/**
 * Sedan har jag lagt till en event-lyssnare till varje variabel som ska vänta tills någon "klickar" på knappen
 * och där med trigga en funktion.
 */

// namnetPåVariabeln.addEventListener('click', namnetPåFunktionen);
sortByNameBtn.addEventListener('click', sortByName); // <-- HÄR sker kopplingen mellan funktionen och knappen
sortByPriceBtn.addEventListener('click', sortByPrice); // <-- HÄR

/**
 * Själva funktionen ser du under min kommentars-banner "(FUNCTIONS) SORT BUTTONS".
 */

//=========================================================================================================================================
//======= (FUNCTIONS) FILTER BUTTONS ======================================================================================================
//=========================================================================================================================================

// function() { KODBLOCK }

/**
 * HÄR är funktionerna jag kopplat till knapparna.
 * En funktion kopplas till knappen med hjälp av en event-lyssnare (se kopplingen under "FILTER BUTTONS")
 * Själva funktionen går ut på att när en användare klickat på knappen så händer det något på sidan.
 * Vad det är som händer står före respektive funktion.
 */

// Visar alla doftljus
function filterByDoftljusCategory() {
  filteredProducts = products.filter(product => product.category == 'doftljus');
  printProducts();
}

// HEJ MITT FRAMTIDA JAG! HÄR SLUTADE JAG FÖR DAGEN IGÅR.

// Kodblocket innehåller let-variabeln "filtered products"
// Variabelns värde har variabeln "products"
// .filter() skapar en ny array
// Om product.category == 'doftljus' är true ...

// Visar alla doftpinnar
function filterByDoftpinnarCategory() {
  filteredProducts = products.filter(product => product.category == 'doftpinnar');
  printProducts();
}

// Visar alla muggar
function filterByMuggarCategory() {
  filteredProducts = products.filter(product => product.category == 'muggar');
  printProducts();
}

// Visar ALLA produkter
function showAllProducts() {
  filteredProducts = Array.from(products); // Kopplar på arrayen ur variabeln "products" jag skapade förut (under min banner "PRODUCTS")
  printProducts();
}

// Arrayen har inte än tillkopplats några element

//=========================================================================================================================================
//========= (FUNCTIONS) SORT BUTTONS ======================================================================================================
//=========================================================================================================================================

// sort() = Array metod
function sortByPrice() {
  filteredProducts.sort((a, b) => b.price - a.price);
  printProducts();
}

function sortByName() {
  filteredProducts.sort((product1, product2) => {
    const product1Name = product1.name.toUpperCase();
    const product2Name = product2.name.toUpperCase();
    if (product1Name < product2Name) {
      return -1;
    }
    if (product1Name > product2Name) {
      return 1;
    }

    return 0;
  });

  printProducts();
}

//=========================================================================
//=========================================================================
//=========================================================================

/**
 * Här deklarerar jag en variabel med typen "let"
 * och gen den namnet filteredProducts.
 * Tanken med den variabeln är att den ska användas till att visa filtrerade produkter
 */

// Global variabel?
let filteredProducts = Array.from(products); // Kopplar på arrayen ur variabeln "products" jag skapade förut (under min banner "PRODUCTS")
const productsListing = document.querySelector('#products');

//=========================================================================
//=========================================================================
//=========================================================================

// En funktion som innehåller en loop
function printProducts() {
  productsListing.innerHTML = '';

  let html = '';

  // for loop
  for (let i = 0; i < filteredProducts.length; i++) {
    // HÄR börjar loopen
    const currentProduct = filteredProducts[i];

    let imgHtml = '';

    // if (villkor) = Om villkoret är sant körs koden
    // "Om det finns en bild (true) - visa den"
    if (currentProduct.img !== '') {
      imgHtml = `
        <figure class="product-image">
          <img src="${currentProduct.img.src}" 
          width="${currentProduct.img.width}" 
          height="${currentProduct.img.height}"
          alt="${currentProduct.img.alt}"
          loading="lazy">
        </figure>`;
    }

    // Inner-html
    html += `
      <article>
        <h2>${currentProduct.name}</h2>
        ${imgHtml}
        <div class="metadata">
          <p>Pris: ${currentProduct.price} kr</p>
          <p>Betyg: ${currentProduct.rating}/5</p>
        </div>
        <p class="visually-hidden">Kategori: ${currentProduct.category}</p>
        <button class="decrease" data-id="${currentProduct.id}">-</button>
        <input type="number" id="amount-${currentProduct.id}" disabled>
        <button class="increase" data-id="${currentProduct.id}">+</button>
        <button class="buy" data-id="${currentProduct.id}">Lägg till</button>
      </article>
    `;
    // HÄR slutar loopen
  }

  // Läggs efter loopen
  // Allt jag bygger inuti loopen visar sig här
  productsListing.innerHTML = html;

  // Köpknapp
  const buyButtons = document.querySelectorAll('#products button.buy');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', addProductToCart);
  });

  // + knapp
  const increaseButtons = document.querySelectorAll('#products button.increase');
  increaseButtons.forEach(btn => {
    btn.addEventListener('click', increaseProductCount);
  });

  // - knapp
  const decreaseButtons = document.querySelectorAll('#products button.decrease');
  decreaseButtons.forEach(btn => {
    btn.addEventListener('click', decreaseProductCount); // väntar på att användaren ska klicka på objektet
  });
}

function increaseProductCount(e) {
  // tar emot event-objekt
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`);
  input.value = Number(input.value) + 1; // ökar värdet med 1
}

function decreaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`); // väljer element med ID amount
  input.value = Number(input.value) - 1; // minskar värdet med 1
}

function addProductToCart(e) {
  const clickedBtnId = Number(e.target.dataset.id);

  const product = products.find(product => product.id === clickedBtnId);

  if (product === undefined) {
    // Vi hittade ingen produkt, avbryt
    return;
  }

  // const index = LOOKUP_OBJECT.findIndex(item => item.PROPERTY === LOOKUP_VALUE);

  // Kolla om produkten redan finns i varukorgen
  const index = cart.findIndex(product => product.id === clickedBtnId);
  if (index === -1) {
    product.amount = 1;
    cart.push(product);
  } else {
    // Öka antalet i varukorgen istället,
    // produkten finns redan i varukorgen
    product.amount += 1;
  }

  printCart();
}

const cartSection = document.querySelector('#cart');
function printCart() {
  cartSection.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    cartSection.innerHTML += `
      <p>${cart[i].name}: ${cart[i].amount} st</p>
    `;
  }
}

printProducts();
