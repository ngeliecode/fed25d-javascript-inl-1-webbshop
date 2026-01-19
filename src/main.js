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
//========= PRODUCTS ====================================
//=======================================================

// const = deklarerar en variabel
// products = variabelnamn
// [] = array (lista)
// {} = objekt (property = property name (key) + (value))

// 1. Deklarera en variabel för mina produkter
// 2. Ge den ett värde i form av en array som innehåller objekt (produkterna)
const products = [
  {
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: 'doftljus.jpg',
  },
  {
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: 'doftljus.jpg',
  },
  {
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: 'doftljus.jpg',
  },
  {
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: 'doftljus.jpg',
  },
  {
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: 'doftpinnar.jpg',
  },
  {
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: 'doftpinnar.jpg',
  },
  {
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: 'doftpinnar.jpg',
  },
  {
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: 'doftpinnar.jpg',
  },
  {
    name: 'Muggar',
    price: 99,
    rating: 3,
    category: 'muggar',
    img: 'muggar.jpg',
  },
  {
    name: 'Muggar',
    price: 99,
    rating: 3,
    category: 'muggar',
    img: 'muggar.jpg',
  },
];

// Global variabel
let filteredProducts = Array.from(products);

//=========================================================================
//========= FILTER BUTTONS ================================================
//=========================================================================

const productsListing = document.querySelector('#products');

const doftljusFilterBtn = document.querySelector('#doftljusFilterBtn');
const doftpinnarFilterBtn = document.querySelector('#doftpinnarFilterBtn');
const muggarFilterBtn = document.querySelector('#muggarFilterBtn');
const showAllFilterBtn = document.querySelector('#showAllFilterBtn');

doftljusFilterBtn.addEventListener('click', filterByDoftljusCategory);
doftpinnarFilterBtn.addEventListener('click', filterByDoftpinnarCategory);
muggarFilterBtn.addEventListener('click', filterByMuggarCategory);
showAllFilterBtn.addEventListener('click', showAllProducts);

function showAllProducts() {
  filteredProducts = Array.from(products);
  printProducts();
}

function filterByDoftljusCategory() {
  filteredProducts = products.filter(product => product.category == 'doftljus');
  printProducts();
}

function filterByDoftpinnarCategory() {
  filteredProducts = products.filter(product => product.category == 'doftpinnar');
  printProducts();
}

function filterByMuggarCategory() {
  filteredProducts = products.filter(product => product.category == 'muggar');
  printProducts();
}

printProducts();

function printProducts() {
  productsListing.innerHTML = '';

  for (let i = 0; i < filteredProducts.length; i++) {
    const currentProduct = filteredProducts[i];

    const html = `
      <article>
        <h2>${currentProduct.name}</h2>
        <div class="metadata">
          <p>Pris: ${currentProduct.price} kr</p>
          <p>Betyg: ${currentProduct.rating}/5</p>
        </div>
        <p>Kategori: ${currentProduct.category}</p>
      </article>
    `;

    productsListing.innerHTML += html;
  }
}
