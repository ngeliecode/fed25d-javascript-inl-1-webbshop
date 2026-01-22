import './styles/style.scss';

/* Mina variabler 
const navBtn
const navMenu
const cart
const productsList          --->  <section id="products">
const products              --->  <article>
const doftljusFilterBtn     --->  <button id="doftljusFilterBtn"
const doftpinnarFilterBtn
const muggarFilterBtn
const showAllFilterBtn
const sortByNameBtn
const sortByPriceBtn
let filteredProducts
let html
*/

/* Mina funktioner 
printProducts 
sortByName
sortByPrice
*/

//== nav =====================================================
//========= NAVIGATION =======================================
//============================================================

const navBtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('.navbar');

navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle('active');
} // const toggleMenu = function() {...};

//== cart =====================================================
//========= SHOPPING-CART ===============================
//=======================================================

const cart = [];

//== products ===============================================================================================================
//========= (VARIABLE) PRODUCTS ===================================================================================
//=================================================================================================================

/**
 * Här har jag skapat en variabel åt min produktlista.
 * Jag kommer använda variabeln senare till att koppla min <section id=products>.
 */

/* Bra att komma ihåg! 
const = deklarerar en variabel
[] = Array (lista)
{} = Objekt (property = property name (key) + (value))
arrayLiteral = [ ... ]
Variabel (variabelnamn = värde)
// const arrayMedObjekt = [
//  { name: 'objekt', price: 99 },
//  { name: 'objekt', price: 129 }
// ];
*/

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

//== filter-btn =======================================================================================================================================
//============== FILTER BUTTONS ================================================================================================================
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
//======= (VARIABLES) SORT BUTTONS ==================================================================================================================
//=========================================================================================================================================

/** BESKRIVNING
 * HÄR har jag skapat variabler för varje sorterings-knapp i <main>,
 * jag har använt document.querySelector till att välja vilka element som ska höra till vilka variabler.
 */

// const namnetPåVariabeln = document.querySelector('#namnetPåElementetsId');
const sortByNameBtn = document.querySelector('#sortByNameBtn');
const sortByPriceBtn = document.querySelector('#sortByPriceBtn');

/**
 * Sedan har jag lagt till en event-lyssnare till varje variabel
 * som väntar tills någon "klickar" på knappen för att sen kunna trigga en funktion.
 * Själva funktionen ser du under min kommentars-banner "(FUNCTIONS) SORT BUTTONS".
 */

// namnetPåVariabeln.addEventListener('click', namnetPåFunktionen);
sortByNameBtn.addEventListener('click', sortByName); // <-- HÄR sker kopplingen mellan funktionen och knappen
sortByPriceBtn.addEventListener('click', sortByPrice); // <-- HÄR

//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================

/**
 * Här deklarerar jag en variabel med typen "let"
 * och ger den namnet filteredProducts.
 * Den ska lagra en array som ska kunna uppdateras/ändras beroende på vad jag vill ska visas på sidan.
 */

// Global variabel är?
let filteredProducts = Array.from(products); // Kopplar på arrayen ur variabeln "products" jag skapade förut (under min banner "PRODUCTS")
const productsList = document.querySelector('#products');

//===========================================================================================================================================
//======= (FUNCTIONS) FILTER BUTTONS ========================================================================================================
//===========================================================================================================================================

/** BESKRIVNING
 * HÄR finns funktionerna jag kopplat till filtrerings-knapparna.
 * En funktion kopplas till en knapp med hjälp av en event-lyssnare (se kopplingen under "FILTER BUTTONS")
 * Själva funktionen går ut på att när en användare klickat på knappen så händer det något på sidan.
 * Vad det är som "händer" står före respektive funktion.
 */

// function() { KODBLOCK }

/* Vad gör denna funktion?
    Den skapar en ny array som lagras inuti variabeln "filteredProducts".
    Den nya arrayen skapas genom att den befintliga arrayen filtreras och endast objekt med kategorin 'doftljus' tas med.
    Efter filtreringen så "printas" endast doftljusen ut på sidan med printProducts() (se funktionen under ... )
*/
/* { kodblocket }

        filteredProducts  --> (let-variabel)    -->  Ny array         --> DOFTLJUS produkter
        products          --> (const-variabel)  -->  Orginal array    --> ALLA produkter
        filter()          --> (array-metod)     -->  Skapar ny array 
        product           --> (parameter-namn)  --> 
        printProducts()   --> (funktion)
        
        filter( KODBLOCK? ) innehåller:
 */
function filterByDoftljusCategory() {
  filteredProducts = products.filter(product => product.category == 'doftljus'); // .filter( HÄR INNE SKER NÅGOT SUPER KOMPLEXT );
  printProducts(); // printar ut innehållet på sidan
}

function filterByDoftpinnarCategory() {
  filteredProducts = products.filter(product => product.category == 'doftpinnar');
  printProducts();
}

function filterByMuggarCategory() {
  filteredProducts = products.filter(product => product.category == 'muggar');
  printProducts();
}

function showAllProducts() {
  filteredProducts = Array.from(products); // Kopplar på arrayen ur variabeln "products" jag skapade förut (under min banner "PRODUCTS")
  printProducts();
}

// Produkt-arrayen har inte än tillkopplats några element?

//===========================================================================================================================================
//========= (FUNCTIONS) SORT BUTTONS ========================================================================================================
//===========================================================================================================================================

/** BESKRIVNING
 * HÄR finns funktionerna jag kopplat till sorterings-knapparna.
 * En funktion kopplas till en knapp med hjälp av en event-lyssnare (se kopplingen under "SORT BUTTONS")
 * Själva funktionen går ut på att när en användare klickat på knappen så händer det något på sidan.
 * Vad det är som "händer" står före respektive funktion.
 */

// function() { KODBLOCK }

/* Vad gör funktionen?
    Den sorterar produktlistan efter pris (dyrast först).
    Efter sorteringen så anropas printProducts och man kan visuellt se produkterna ändra ordning då man trycker på sorterings-knappen.
*/
function sortByPrice() {
  filteredProducts.sort((a, b) => b.price - a.price);
  printProducts();
}

/* Vad gör funktionen?
    Den sorterar produktlistan efter VAD?.
    Efter sorteringen så anropas printProducts och man kan visuellt se produkterna ändra ordning då man trycker på sorterings-knappen.
*/
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

//============================================================================================================================================
//========== FUNCTION > LOOP =================================================================================================================
//============================================================================================================================================

/** BESKRIVNING
 * Här är en funktion som heter printProducts deklarerad.
 * Funktionen är programmerad till att */

/* Vad gör funktionen? 
Den tömmer innehållet i ett element för att för att kunna bygga upp det på nytt i en loop. 
*/
/* { kodblocket }

  printProducts() {}   --> (funktion)
    let html = ''        --> let-variabel med tom sträng (värdet kan ändras senare, den är inte konstant) 
    productListing       --> (const-variabel)  
    innerHTML            --> egenskap till productList   --> Allt inuti <section id="products">
    innerHTML = '';      --> Tömmer innehåll i <section id="products">

*/

/* Vad gör loopen? */
/* (..) 

    for                  --> deklarerar en loop
    for (...) {...}      --> ( Hur loopen ska bete sig ) { Vad som ska loopas}
    let i = 0;           --> loop-variabel med värdet 0
    i                    --> index
    0;                   --> startar på första platsen i arrayen

*/

function printProducts() {
  let html = ''; // tom sträng som startvärde
  productsList.innerHTML = ''; // tömmer elementet

  for (let i = 0; i < filteredProducts.length; i++) {
    const currentProduct = filteredProducts[i];

    let imgHtml = '';

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
  productsList.innerHTML = html;

  //=========================================================================================================================================
  //========= BUY BUTTONS ===================================================================================================================
  //=========================================================================================================================================

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

//=========================================================================================================================================
//========= (FUNCTION) BUY BUTTONS ========================================================================================================
//=========================================================================================================================================

function increaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`);
  input.value = Number(input.value) + 1; // ökar värdet med 1
}

function decreaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`); // väljer element
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
