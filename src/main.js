import './styles/style.scss';

/*
1. KONSTANTER & KONFIG
2. STATE (data)
3. DOM-REFERENSER
4. INIT / EVENT-LYSSNARE
5. UI-FUNKTIONER (render / update)
6. LOGIK / DATA-FUNKTIONER
7. EVENT-HANDLERS 
*/

// ===========================================================================================================================
// DATA ========================================================================================================
// ===========================================================================================================================

/* Bra att komma ihåg! 
const = deklarerar en variabel
[] = Array (lista)
{} = Objekt (property = property name (key) + (value))
arrayLiteral = [ ... ]
Variabel (variabelnamn = värde)
const arrayMedObjekt = [
{ name: 'objekt', price: 99 },
{ name: 'objekt', price: 129 } ]
*/

const cart = []; // <-- tom varukorg
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

let filteredProducts = Array.from(products);

// ===========================================================================================================================
// DOM-REFERENSER ===================================================================================================================
// ===========================================================================================================================

// Navigation
const navBtn = document.querySelector('#btnNav');
const navMenu = document.querySelector('#navMenu');

// Filterknappar (produktkategorier)
const filterByFireBtnEl = document.querySelector('#filterByFireBtn');
const filterByEarthBtnEl = document.querySelector('#filterByEarthBtn');
const filterByAirBtnEl = document.querySelector('#filterByAirBtn');
const filterByWaterBtnEl = document.querySelector('#filterByWaterBtn');
const filterByShowAllBtnEl = document.querySelector('#filterByShowAllBtn');

// Produkter
const productsEl = document.querySelector('#products');

// Varukorg
const cartSection = document.querySelector('#cart');
const cartTotalEl = document.querySelector('#cartTotal');
const cartCountEl = document.querySelector('#cartCount');
const cartBaseTotalEl = document.querySelector('#cartBaseTotal');

// Formulär
const form = document.querySelector('#orderForm');
const inputs = document.querySelectorAll('input[required]');
const orderButton = form.querySelector('button[type="submit"]');

// Prissättning / affärsregler
const discountInfo = document.querySelector('#discountInfo');

// =========================================================================================================================================
// INIT / EVENT-LYSSNARE ================================================================================================================================
// =========================================================================================================================================

printProducts();
checkFormValidity();

// Navigation
navBtn.addEventListener('click', toggleMenu);

// Filterknappar (produkt-kategorier)
filterByFireBtnEl.addEventListener('click', filterByCategoryFireFu);
filterByEarthBtnEl.addEventListener('click', filterByCategoryEarthFu);
filterByAirBtnEl.addEventListener('click', filterByCategoryAirFu);
filterByWaterBtnEl.addEventListener('click', filterByCategoryWaterFu);
filterByShowAllBtnEl.addEventListener('click', filterByCategoryShowAllFu);

// Formulär
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

// =========================================================================================================================================
// LOGIK / DATA-FUNKTIONER ================================================================================================================================
// =========================================================================================================================================

// Navigation
function toggleMenu() {
  navMenu.classList.toggle('active');
}

// Filterknappar (produkt-kategorier)
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

// Varukorg
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

  // Uppdatera varor i varukorgen
  printCart();
  updateCartTotal();
  updateCartCount();
  calculateCartTotalWithRules();
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

  printCart();
  updateCartTotal();
  updateCartCount();
}

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
  updateCartCount();
  updateCartTotal();
}

function deleteProductFromCart(e) {
  const rowId = Number(e.target.dataset.id);

  cart.splice(rowId, 1);

  printCart();
  updateCartCount();
  updateCartTotal();
}

// Formulär
function checkFormValidity() {
  // Validerar beställningsformuläret och styr om beställningsknappen är aktiv
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

function validateInput(input) {
  const isValid = input.checkValidity();

  // Uppdatera aria-invalid attribut
  input.setAttribute('aria-invalid', !isValid);
}

// Prissättning / affärsregler
function calculateCartTotalWithRules(date = new Date()) {
  let baseTotal = 0;

  // Loopa igenom alla produkter i varukorgen
  for (let i = 0; i < cart.length; i++) {
    // Vad är produkternas grundpris
    let price = cart[i].price;

    // Regel 2: helgpåslag +15 % (påverkar pris per produkt)
    // Avgör OM regeln gäller (TID)
    const day = date.getDay(); // 0 = sön, 5 = fre, 6 = lör
    const hour = date.getHours();

    const isFridayAfter15 = day === 5 && hour >= 15;
    const isSaturday = day === 6;
    const isSundayBefore03 = day === 0 && hour < 3;

    const isWeekendSurchargeActive = isFridayAfter15 || isSaturday || isSundayBefore03;

    // Applicera regeln OM den gäller (tid)
    if (isWeekendSurchargeActive) {
      price *= 1.15; // +15 % på produktens pris
    }

    // Lägg till produktens (ev justerade) pris till grundsumman
    baseTotal += price * cart[i].amount;
  }

  // TOTALSUMMA EFTER PRODUKTREGLER
  let finalTotal = baseTotal;

  // REGEL 1 - MÅNDAGSRABATT (-10 %) på beställningen

  // Avgör OM regeln gäller
  const MONDAY = 1;
  const isMondayDiscountActive = date.getDay() === MONDAY && date.getHours() < 10;

  // Applicera regeln OM den gäller
  if (isMondayDiscountActive) {
    finalTotal *= 0.9;
  }

  // RETURNERA DATA TILL UI
  return {
    baseTotal, // före alla rabatter
    finalTotal, // efter alla regler
    isMondayDiscountActive, // UI behöver detta för text
  };
}

// ============================================================================================================================================
// UI-FUNKTIONER =============================================================================================================================
// ============================================================================================================================================

// Töm produktlistan och bygg upp på nytt beroende på..
function printProducts() {
  productsEl.innerHTML = ''; // tömmer elementet
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
        <button class="btn decrease" data-id="${currentProduct.id}">-</button>
        <input type="number" id="amount-${currentProduct.id}" disabled>
        <button class="btn increase" data-id="${currentProduct.id}">+</button>
        <button class="btn buy" data-id="${currentProduct.id}">Lägg till</button>
      </article>
    `;
  }

  // 1️⃣ RENDERA HTML FÖRST
  productsEl.innerHTML = html; // <-- Allt jag bygger inuti loopen visar sig här

  // 2️⃣ KOPPLA EVENT EFTER RENDER
  const buyButtons = document.querySelectorAll('#products button.buy'); // Välj ( alla button-element med klassen "buy" i elementet med id "products" )
  buyButtons.forEach(btn => {
    btn.addEventListener('click', addProductToCart);
  });

  const increaseButtons = document.querySelectorAll('#products button.increase');
  increaseButtons.forEach(btn => {
    btn.addEventListener('click', increaseProductCount);
  });

  const decreaseButtons = document.querySelectorAll('#products button.decrease');
  decreaseButtons.forEach(btn => {
    btn.addEventListener('click', decreaseProductCount);
  });
}

function printCart() {
  // loopa igenom varukorgen och uppdatera UI
  cartSection.innerHTML = ''; // rensa varukorgens html

  for (let i = 0; i < cart.length; i++) {
    // bygg upp html igen baserat på vad som läggs till i cart
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

  // Hämta knappar, lägg till event-lyssnare och vänta på klick
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

  updateCartCount();
}

function updateCartTotal() {
  // HÄMTA DATA FRÅN LOGIKEN
  const { baseTotal, finalTotal, isMondayDiscountActive } = calculateCartTotalWithRules();

  // GRUNDSUMMA (före rabatter)
  cartBaseTotalEl.textContent = `${Math.round(baseTotal)} kr`;

  // SLUTSUMMA (efter alla regler)
  cartTotalEl.textContent = `${Math.round(finalTotal)} kr`;

  // RABATTINFO
  discountInfo.textContent = isMondayDiscountActive ? 'Måndagsrabatt: 10 % på hela beställningen' : '';
}

function updateCartCount() {
  // Räkna ut antal produkter i varukorgen OCH uppdatera UI
  let totalCount = 0;

  for (let i = 0; i < cart.length; i++) {
    totalCount += cart[i].amount;
  }

  cartCountEl.textContent = totalCount;
}

// ============================================================================================================================================
// EVENT-HANDLERS =============================================================================================================================
// ============================================================================================================================================

/* Skillnad på event-handlers och event-lyssnare? */

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
