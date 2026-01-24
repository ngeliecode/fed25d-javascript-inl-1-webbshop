import './styles/style.scss';

/* Mina variabler 
const navBtn
const navMenu
const cart
const productsList          --->  <section id="products">
const products              --->  <article>
const btnFiltreraDoftljusFire     --->  <button id="btnFiltreraDoftljusFire"
const btnFiltreraDoftljusAir
const btnFiltreraDoftljusAir
const btnVisaAllaDoftljus
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
  {
    id: 1,
    name: 'Aries',
    price: 109,
    rating: 5,
    category: 'fire',
    img: '',
  },
  {
    id: 2,
    name: 'Taurus',
    price: 109,
    rating: 5,
    category: 'earth',
    img: '',
  },
  {
    id: 3,
    name: 'Gemini',
    price: 109,
    rating: 5,
    category: 'air',
    img: '',
  },
  {
    id: 4,
    name: 'Cancer',
    price: 109,
    rating: 5,
    category: 'water',
    img: '',
  },
  {
    id: 5,
    name: 'Leo',
    price: 129,
    rating: 4,
    category: 'fire',
    img: '',
  },
  {
    id: 6,
    name: 'Virgo',
    price: 129,
    rating: 4,
    category: 'earth',
    img: '',
  },
  {
    id: 7,
    name: 'Libra',
    price: 129,
    rating: 4,
    category: 'air',
    img: '',
  },
  {
    id: 8,
    name: 'Scorpio',
    price: 129,
    rating: 4,
    category: 'water',
    img: '',
  },
  {
    id: 9,
    name: 'Sagittarius',
    price: 99,
    rating: 3,
    category: 'fire',
    img: {
      src: 'bild.jpeg',
      width: 886,
      height: 886,
      alt: 'skapa alt-text',
    },
  },
  {
    id: 10,
    name: 'Capricorn',
    price: 99,
    rating: 3,
    category: 'earth',
    img: '',
  },
  {
    id: 11,
    name: 'Aquarius',
    price: 99,
    rating: 3,
    category: 'air',
    img: '',
  },
  {
    id: 12,
    name: 'Pisces',
    price: 99,
    rating: 3,
    category: 'water',
    img: '',
  },
];

//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================

/**
 * Här deklarerar jag en let-variabel som ska lagra en array som ska kunna uppdateras/ändras beroende på vad jag vill ska visas på sidan.
 * Jag deklarerar också en const-variabel som jag kopplar på html-element.
 * productList behövs då jag ska lägga in loopen för produkterna.
 */

// Global variabel är?
let filteredProducts = Array.from(products); // Kopplar på arrayen ur variabeln "products" (under min banner "PRODUCTS")
const productsList = document.querySelector('#products');

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
  productsList.innerHTML = ''; // tömmer elementet
  let html = ''; // tom sträng som startvärde

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
        <h2>${currentProduct.name.toUpperCase()} 200g Scented Candle</h2>
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

  // Allt jag bygger inuti loopen visar sig här
  productsList.innerHTML = html; // Läggs efter loopen

  //== filter-btn =======================================================================================================================================
  //============== FILTER BUTTONS ================================================================================================================
  //=========================================================================================================================================

  /** KOD BESKRIVNING
   * Jag har skapat variabler för varje filtrera-knapp i <main>,
   * jag har använt document.querySelector till att välja vilka element som ska höra till vilka variabler.
   */

  const filterByFireBtnEl = document.querySelector('#filterByFireBtnEl'); // <-- HÄR sker kopplingen mellan variabeln och elementet (knappen)
  const filterByEarthBtnEl = document.querySelector('#filterByEarthBtnEl');
  const filterByAirBtnEl = document.querySelector('#filterByAirBtnEl');
  const filterByWaterBtnEl = document.querySelector('#filterByWaterBtnEl');
  const filterByShowAllBtnEl = document.querySelector('#filterByShowAllBtnEl');

  /** KOD BESKRIVNING
   * Sedan har jag lagt till en event-lyssnare till varje variabel som ska vänta tills någon "klickar" på knappen
   * och där med kunna trigga en funktion.
   */

  // namnetPåVariabeln.addEventListener('click', namnetPåFunktionen);
  filterByFireBtnEl.addEventListener('click', filterByCategoryFireFu); // <-- HÄR sker kopplingen mellan funktionen och knappen
  filterByEarthBtnEl.addEventListener('click', filterByCategoryEarthFu);
  filterByAirBtnEl.addEventListener('click', filterByCategoryAirFu);
  filterByWaterBtnEl.addEventListener('click', filterByCategoryWaterFu);
  filterByShowAllBtnEl.addEventListener('click', filterByCategoryShowAllFu);

  //===========================================================================================================================================
  //======= (FUNCTIONS) FILTER BUTTONS ========================================================================================================
  //===========================================================================================================================================

  /** BESKRIVNING
   * HÄR finns funktionerna jag kopplat till filtrerings-knapparna.
   * En funktion kopplas till en knapp med hjälp av en event-lyssnare.
   */

  // function() { KODBLOCK }

  /* Vad gör denna funktion?
    Den skapar en ny array som lagras inuti variabeln "filteredProducts".
    Den nya arrayen skapas genom att den befintliga arrayen filtreras och endast objekt med kategorin användaren valt tas med.
    Efter filtreringen så "printas" valda produkter ut på sidan med printProducts().
*/
  /* { kodblocket }

        filteredProducts  --> (let-variabel)    -->  Ny array         --> DOFTLJUS produkter
        products          --> (const-variabel)  -->  Orginal array    --> ALLA produkter
        filter()          --> (array-metod)     -->  Skapar ny array 
        product           --> (parameter-namn)  --> 
        printProducts()   --> (funktion)
        
        filter( KODBLOCK? ) innehåller:
 */
  function filterByCategoryFireFu() {
    filteredProducts = products.filter(product => product.category == 'fire'); // .filter( HÄR INNE SKER NÅGOT SUPER KOMPLEXT );
    printProducts();
  }

  function filterByCategoryEarthFu() {
    filteredProducts = products.filter(product => product.category == 'earth');
    printProducts();
  }

  function filterByCategoryAirFu() {
    filteredProducts = products.filter(product => product.category == 'air');
    printProducts();
  }

  function filterByCategoryWaterFu() {
    filteredProducts = products.filter(product => product.category == 'water');
    printProducts();
  }

  function filterByCategoryShowAllFu() {
    filteredProducts = Array.from(products); // Kopplar på arrayen ur variabeln "products" jag skapade förut (under min banner "PRODUCTS")
    printProducts();
  }

  // Produkt-arrayen har inte än tillkopplats några element?

  //=========================================================================================================================================
  //========= BUY BUTTONS ===================================================================================================================
  //=========================================================================================================================================

  // köp knapp
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

  let amount = Number(input.value) - 1;
  if (amount < 0) {
    amount = 0;
  }

  input.value = amount;
}

function addProductToCart(e) {
  const clickedBtnId = Number(e.target.dataset.id);

  const product = products.find(product => product.id === clickedBtnId);

  if (product === undefined) {
    return;
  }

  const inputField = document.querySelector(`#amount-${clickedBtnId}`);
  let amount = Number(inputField.value);
  if (amount < 0) {
    return;
  }

  // Återställ input-fältets värde till 0 efter tryck på köp-knappen
  inputField.value = 0;

  const index = cart.findIndex(product => product.id === clickedBtnId);
  if (index === -1) {
    product.amount = amount;
    cart.push(product);
  } else {
    product.amount += amount;
  }

  updateCartTotals();
  printCart();
}

const cartTotalEl = document.querySelector('#cartTotal');
function updateCartTotals() {
  // Kolla vilka produkter vi har i varukorgen (loopa igenom)
  // Kolla priset
  // Gångra priset med antalet
  // Plussa ihop alla varors totalpris till en totalsumma för hela varukorgen

  let cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const productSum = cart[i].price * cart[i].amount;
    cartTotal += productSum;
  }

  cartTotalEl.innerHTML = `${cartTotal} kr`;

  highlightCartTotalChange();
}

function highlightCartTotalChange() {
  cartTotalEl.classList.add('highlight-price');

  const SECONDS_IN_MS = 1000;
  const SECONDS = 1;
  setTimeout(removeCartTotalHighlight, SECONDS_IN_MS * SECONDS);
}

function removeCartTotalHighlight() {
  cartTotalEl.classList.remove('highlight-price');
}

const cartSection = document.querySelector('#cart');
function printCart() {
  cartSection.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    cartSection.innerHTML += `
      <article>
        ${cart[i].name}:
        <button data-id="${cart[i].id}" class="decrease-cart-product">-</button>
        ${cart[i].amount} st
        <button data-id="${cart[i].id}" class="increase-cart-product">+</button>
        <button data-id="${i}" class="delete-product">Radera</button>
      </article>
    `;
  }

  const deleteButtons = document.querySelectorAll('button.delete-product');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', deleteProductFromCart);
  });

  const cartDecreaseButtons = document.querySelectorAll('button.decrease-cart-product');
  cartDecreaseButtons.forEach(btn => {
    btn.addEventListener('click', decreaseProductFromCart);
  });

  const cartIncreaseButtons = document.querySelectorAll('button.increase-cart-product');
  cartIncreaseButtons.forEach(btn => {
    btn.addEventListener('click', increaseProductFromCart);
  });
}

function decreaseProductFromCart(e) {
  // Kolla vilken knapp vi har klickat på, dvs. läs av dess id från "data-id"
  const rowId = Number(e.target.dataset.id);

  // Leta upp produkten i varukorgen som har det id:t
  const product = cart.find(product => product.id === rowId);

  // Vi ska inte kunna beställa negativa värden av produkter
  if (product.amount <= 0) {
    return;
  }
  product.amount -= 1;

  // Skriv ut en uppdaterad varukorg i HTML-strukturen
  printCart();
  updateCartTotals();
}

function increaseProductFromCart(e) {
  // TODO
}

function deleteProductFromCart(e) {
  const rowId = Number(e.target.dataset.id);

  cart.splice(rowId, 1);

  // Skriv ut en uppdaterad varukorg i HTML-strukturen
  printCart();
  updateCartTotals();
}

printProducts();
