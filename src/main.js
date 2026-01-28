import './styles/style.scss';

// Bygga HTML  →  Hämta element  →  Koppla klick
//   (DOM)          (JS)             (events)

// Deklarera variabeln (const, let) innan du använder den!

// Jag kan anropa/köra en funktion som jag deklarerar i framtiden. Jag kan köra en funktion som inte är född ännu.
// Ta reda på hoisting

// Variabler som deklareras inuti en funktion kan inte användas utanför funktionen. Global/lokal variabel?
// MEN funktionen kan returnera den, jag får tillbaka den

// Scope = ?

//===========================================================================================================================
//========= NAVIGATION ======================================================================================================
//===========================================================================================================================

// Deklarera variabel för nav-knappen (hamburger)
const navBtn = document.querySelector('#btnNav');
// Deklarera variabel för menylistan
const navMenu = document.querySelector('#navMenu');

navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle('active');
}

//===========================================================================================================================
//========= PRODUKTER ========================================================================================================
//===========================================================================================================================

/* Bra att komma ihåg! 
const = deklarerar en variabel
[] = Array (lista)
{} = Objekt (property = property name (key) + (value))
arrayLiteral = [ ... ]
Variabel (variabelnamn = värde)
// const arrayMedObjekt = [
//  { name: 'objekt', price: 99 },
//  { name: 'objekt', price: 129 }
*/

// Deklarera variabel för produktlistan
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

//===========================================================================================================================
//====== Variabler som behöver ligga högt upp ===============================================================================
//===========================================================================================================================

// Skapa en tom varukorg som kommer fyllas med produkter
const cart = []; // <-- måste ligga ovanför all kod som använder variabeln cart

// Skapa en lista med filtrerade produkter
let filteredProducts = Array.from(products); // Koppla på arrayen ur variabeln "products"

//=========================================================================================================================================
//========= FILTER KNAPPAR ================================================================================================================
//=========================================================================================================================================

// Hämta alla filter-knappar
const filterByFireBtnEl = document.querySelector('#filterByFireBtn'); // <-- HÄR sker kopplingen mellan variabeln och elementet (knappen)
const filterByEarthBtnEl = document.querySelector('#filterByEarthBtn');
const filterByAirBtnEl = document.querySelector('#filterByAirBtn');
const filterByWaterBtnEl = document.querySelector('#filterByWaterBtn');
const filterByShowAllBtnEl = document.querySelector('#filterByShowAllBtn');

// Lägg till en event-lyssnare och koppla på en funktion
filterByFireBtnEl.addEventListener('click', filterByCategoryFireFu); // <-- HÄR sker kopplingen mellan funktionen och knappen
filterByEarthBtnEl.addEventListener('click', filterByCategoryEarthFu); // <-- namnetPåVariabeln.addEventListener('click', namnetPåFunktionen);
filterByAirBtnEl.addEventListener('click', filterByCategoryAirFu);
filterByWaterBtnEl.addEventListener('click', filterByCategoryWaterFu);
filterByShowAllBtnEl.addEventListener('click', filterByCategoryShowAllFu);

// Filtrera produktlistan och uppdatera en ny lista
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

//============================================================================================================================================
//========= INNER HTML =============================================================================================================================
//============================================================================================================================================

/**
 * Här deklarerar jag en let-variabel som ska lagra en array som ska kunna uppdateras/ändras beroende på vad jag vill ska visas på sidan.
 * Jag deklarerar också en const-variabel som jag kopplar på html-element.
 * productList behövs då jag ska lägga in loopen för produkterna.
 */

/* { kodblocket }

  printProducts() {}   --> (funktion)
    let html = ''        --> let-variabel med tom sträng (värdet kan ändras senare, den är inte konstant) 
    productListing       --> (const-variabel)  
    innerHTML            --> egenskap till productList   --> Allt inuti <section id="products">
    innerHTML = '';      --> Tömmer innehåll i <section id="products">

*/

/* for (..) 

    for                  --> deklarerar en loop
    for (...) {...}      --> ( Hur loopen ska bete sig ) { Vad som ska loopas}
    let i = 0;           --> loop-variabel med värdet 0
    i                    --> index
    0;                   --> startar på första platsen i arrayen

*/

// Hämta produktlistan
const productsEl = document.querySelector('#products');

// Töm produktlistan och bygg upp på nytt beroende på..
function printProducts() {
  productsEl.innerHTML = ''; // tömmer elementet
  let html = ''; // tom sträng som startvärde

  // loopa
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
        <button class="btn decrease" data-id="${currentProduct.id}">-</button>
        <input type="number" id="amount-${currentProduct.id}" disabled>
        <button class="btn increase" data-id="${currentProduct.id}">+</button>
        <button class="btn buy" data-id="${currentProduct.id}">Lägg till</button>
      </article>
    `;
  }

  productsEl.innerHTML = html; // <-- Allt jag bygger inuti loopen visar sig här
}

printProducts();

//=========================================================================================================================================
//========= ( LÄGG TILL ) KNAPPAR  ========================================================================================================
//=========================================================================================================================================

// BARA HÄMTA, KOPPLA PÅ EVENT-LYSSNARE OCH FUNKTION

// Hämta plus-knapparna, lägg till en event-lyssnare och koppla på en funktion
const increaseButtons = document.querySelectorAll('#products button.increase');
increaseButtons.forEach(btn => {
  // Lägg till event-lyssnare och koppla på en funktion
  btn.addEventListener('click', increaseProductCount); // Vänta på ett klick
});

// Hämta minus-knapparna, lägg till en event-lyssnare och koppla på en funktion
const decreaseButtons = document.querySelectorAll('#products button.decrease');
decreaseButtons.forEach(btn => {
  // Lägg till event-lyssnare och koppla på en funktion
  btn.addEventListener('click', decreaseProductCount); // Vänta på ett klick
});

// Hämta köp-knapparna (LÄGG TILL), lägg till en event-lyssnare och koppla på en funktion
const buyButtons = document.querySelectorAll('#products button.buy'); // Välj ( alla button-element med klassen "buy" i elementet med id "products" )
buyButtons.forEach(btn => {
  // Lägg till event-lyssnare och koppla på en funktion
  btn.addEventListener('click', addProductToCart); // Vänta på ett klick
});

//=========================================================================================================================================
//========= INPUT ========================================================================================================
//=========================================================================================================================================

// ÖKA / MINSKA ANTAL VAROR I INPUT FÄLTET

// Öka antalet i inputfältet
function increaseProductCount(e) {
  // Vilken knapp klickades?
  const clickedBtnId = e.target.dataset.id; // --> <button class="increase">
  // Hitta rätt inputfält
  const input = document.querySelector(`#amount-${clickedBtnId}`);
  // Öka värdet med 1
  input.value = Number(input.value) + 1;
}

// Minska antalet i inputfältet
function decreaseProductCount(e) {
  const clickedBtnId = e.target.dataset.id;
  const input = document.querySelector(`#amount-${clickedBtnId}`);
  let amount = Number(input.value) - 1;
  if (amount < 0) {
    amount = 0;
  }
  input.value = amount;
}

//=========================================================================================================================================
//=====================================================================================================================
//=========================================================================================================================================

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LÄGG TILL PRODUKTER I VARUKORGEN

// FAKTISKT LÄGG TILL VARORNA

// Lägg till vald produkt och hur många av den valda produkten
function addProductToCart(e) {
  // (e) = (event)
  // Vilken knapp klickades?
  const clickedBtnId = Number(e.target.dataset.id); // --> <button class="buy"> (LÄGG TILL)
  // Hitta rätt produkt i produktlistan
  const product = products.find(product => product.id === clickedBtnId);
  // Om ingen produkt hittades: avsluta funktionen
  if (product === undefined) {
    return;
  }
  // Hitta inputfältet där användaren skrev antal av produkten
  const inputField = document.querySelector(`#amount-${clickedBtnId}`);
  // Läs hur många användaren vill lägga till
  let amount = Number(inputField.value);

  // Tillåt inte negativa värden
  if (amount <= 0) {
    return;
  }
  // Kontrollera om produkten redan finns i varukorgen
  const index = cart.findIndex(product => product.id === clickedBtnId);
  // Om produkten inte finns i varukorgen
  if (index === -1) {
    // Sätt antal som ska läggas till
    product.amount = amount;
    // Lägg till produkten i varukorgen
    cart.push({ ...product, amount });
    // Om produkten redan finns i varukorgen: öka antalet av den produkten
  } else {
    cart[index].amount += amount;
  }
  // Återställ input-fältets värde till 0 efter tryck på köp-knappen
  inputField.value = 0;

  /*
  if (amount <= 0) return;

  if (index === -1) {
    cart.push({ ...product, amount });
  } else {
    cart[index].amount += amount;
  }

  printCart();
  updateCartCount();
  renderCartTotal();
  */

  // Uppdatera totalsumma i varukorgen
  /*calculateCartTotal();*/
  /*renderCartTotal();*/

  // Uppdatera varor i varukorgen
  printCart();
  updateCartTotal();
  updateCartCount();
}

//============================================================================================================================================
//========= CART =============================================================================================================================
//============================================================================================================================================

// Räkna ut totalsumman i varukorgen och skriv ut den i UI
function updateCartTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].amount;
  }

  cartTotalHeaderEl.textContent = `${total} kr`;
  cartTotalEl.textContent = `${total} kr`;
}

/*DETTA SKA FÖRHOPPNINGSVIS BORT
// Räkna ut totalsumman
function calculateCartTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].amount;
  }
  // Ge tillbaka värdet
  return total;
}

// Uppdatera UI för totalsumma
function renderCartTotal() {
  const total = calculateCartTotal();

  cartTotalEl.textContent = `${total} kr`;
  highlightCartTotalChange();
}
  */

// loopa igenom och uppdatera UI
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

// Markera produktvarukorgen visuellt
function highlightCartTotalChange() {
  cartTotalEl.classList.add('highlight-price');

  const SECONDS_IN_MS = 1000;
  const SECONDS = 1; // Vänta 1 sek
  setTimeout(removeCartTotalHighlight, SECONDS_IN_MS * SECONDS);
}

function removeCartTotalHighlight() {
  cartTotalEl.classList.remove('highlight-price');
}

const cartSection = document.querySelector('#cart');

//////////////////////////////////////////////////////////////////////////////////////////////
// MINSKA PRODUKTER

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

  printCart();
  /*
  calculateCartTotal();
  renderCartTotal();*/
  updateCartTotal();
  updateCartCount();
}

//////////////////////////////////////////////////////////////////////////////////////////////
// ÖKA PRODUKTER

function increaseProductFromCart(e) {
  // Kolla vilken knapp vi har klickat på, dvs. läs av dess id från "data-id"
  const rowId = Number(e.target.dataset.id);

  // Leta upp produkten i varukorgen som har det id:t
  const product = cart.find(product => product.id === rowId);

  // Vi ska inte kunna beställa negativa värden av produkter
  if (product.amount <= 0) {
    return;
  }
  product.amount += 1;

  printCart();
  /*calculateCartTotal();
  renderCartTotal();*/
  updateCartCount();
  updateCartTotal();
}

//////////////////////////////////////////////////////////////////////////////////////////////
// RADERA PRODUKTER

function deleteProductFromCart(e) {
  const rowId = Number(e.target.dataset.id);

  cart.splice(rowId, 1);

  printCart();
  /*calculateCartTotal();
  renderCartTotal();*/
  updateCartCount();
  updateCartTotal();
}

const cartTotalEl = document.querySelector('#cartTotal');

//=========================================================================================================================================
//========= SUBMIT BUTTON =================================================================================================================
//=========================================================================================================================================

const form = document.querySelector('#orderForm');
const inputs = document.querySelectorAll('input[required]');
const orderButton = form.querySelector('button[type="submit"]');

// Kontrollera om alla fält är korrekta
function checkFormValidity() {
  let allValid = true;

  inputs.forEach(input => {
    // Kontrollera om fältet är ifyllt och giltigt
    if (input.value.trim() === '' || !input.checkValidity()) {
      allValid = false;
    }
  });

  // Aktivera/inaktivera knappen
  orderButton.disabled = !allValid;
}

inputs.forEach(input => {
  // Validera när användaren lämnar fältet
  input.addEventListener('blur', () => {
    if (input.value.trim() !== '') {
      validateInput(input);
    }
    checkFormValidity();
  });

  // Uppdatera validering medan användaren skriver (om fältet redan har feedback)
  input.addEventListener('input', () => {
    if (input.hasAttribute('aria-invalid')) {
      validateInput(input);
    }
    checkFormValidity();
  });
});

function validateInput(input) {
  const isValid = input.checkValidity();

  // Uppdatera aria-invalid attribut
  input.setAttribute('aria-invalid', !isValid);
}

// Initial kontroll vid sidladdning
checkFormValidity();

//=========================================================================================================================================
//========= SPECIALREGLER  =====================================================================================================
//=========================================================================================================================================

/*
På måndagar innan kl. 10 ges 10 % rabatt på hela beställningssumman. 
Detta visas i varukorgssammanställningen som en rad med texten 
"Måndagsrabatt: 10 % på hela beställningen".
*/

// Bestäm dagens datum
const date = new Date(2026, 0, 26, 9);
console.log(date);

// Bestäm fraktkostnad
let shippingCost = 25;

///////////////////////////////////////////////////////////////////////////////////////////
// VARUKORGS-IKON

const cartCountEl = document.querySelector('#cartCount');

// Räkna ut OCH uppdatera UI
function updateCartCount() {
  let totalCount = 0;

  for (let i = 0; i < cart.length; i++) {
    totalCount += cart[i].amount;
  }

  cartCountEl.textContent = totalCount;
}

/*
// Visar innehållet i varukorgen
printCart();

// Räknar ut totalsumman i kr
calculateCartTotal();

// Visar totalsumman
renderCartTotal();

// Visar antal varor i varukorgs-ikonen
updateCartCount();

Jag kan samla alla funktioner i en funktion?

function updateCartUI() {
  printCart();
  renderCartTotal();
  updateCartCount();
}

och sen bara köra updateCartUI();

*/

///////////////////////////////////////////////////////////////////////////////////////////

/* OM DET INTE FUNKAR
function calculateCartTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].amount;
  }
  // Ge tillbaka värdet
  return total;
}

function renderCartTotal() {
  const total = calculateCartTotal();

  cartTotalEl.textContent = `${total} kr`;
  highlightCartTotalChange();
}
*/
