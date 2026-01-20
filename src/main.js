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
    id: 1,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  {
    id: 2,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  {
    id: 3,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  {
    id: 4,
    name: 'Doftljus',
    price: 109,
    rating: 5,
    category: 'doftljus',
    img: '',
  },
  {
    id: 5,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  {
    id: 6,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  {
    id: 7,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
  {
    id: 8,
    name: 'Doftpinnar',
    price: 129,
    rating: 4,
    category: 'doftpinnar',
    img: '',
  },
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
  {
    id: 10,
    name: 'Muggar',
    price: 99,
    rating: 3,
    category: 'muggar',
    img: '',
  },
];

const productsListing = document.querySelector('#products');

// Global variabel
let filteredProducts = Array.from(products);

//=========================================================================
//========= FILTER BUTTONS ================================================
//=========================================================================

const doftljusFilterBtn = document.querySelector('#doftljusFilterBtn');
const doftpinnarFilterBtn = document.querySelector('#doftpinnarFilterBtn');
const muggarFilterBtn = document.querySelector('#muggarFilterBtn');
const showAllFilterBtn = document.querySelector('#showAllFilterBtn');

doftljusFilterBtn.addEventListener('click', filterByDoftljusCategory);
doftpinnarFilterBtn.addEventListener('click', filterByDoftpinnarCategory);
muggarFilterBtn.addEventListener('click', filterByMuggarCategory);
showAllFilterBtn.addEventListener('click', showAllProducts);

//=========================================================================
//========= SORT BUTTONS ==================================================
//=========================================================================

const sortByNameBtn = document.querySelector('#sortByNameBtn');
sortByNameBtn.addEventListener('click', sortByName);

const sortByPriceBtn = document.querySelector('#sortByPriceBtn');
sortByPriceBtn.addEventListener('click', sortByPrice);

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

  let html = '';

  for (let i = 0; i < filteredProducts.length; i++) {
    // HÄR börjar loopen
    const currentProduct = filteredProducts[i];

    let imgHtml = '';

    if (currentProduct.img !== '') {
      imgHtml = `
        <div class="product-image">
          <img src="${currentProduct.img.src}" 
          width="${currentProduct.img.width}" 
          height="${currentProduct.img.height}"
          alt="${currentProduct.img.alt}"
          loading="lazy">
        </div>`;
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
        <button data-id="${currentProduct.id}">Lägg till</button>
      </article>
    `;
    // HÄR slutar loopen
  }

  productsListing.innerHTML = html;

  const buyButtons = document.querySelectorAll('#products button');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', addProductToCart);
  });
}

function addProductToCart(e) {
  console.log('add product to cart');
  console.log(e.target);
}

printProducts();
