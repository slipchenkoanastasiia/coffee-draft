const priceElement = document.getElementById('price');
const pricePreview = document.getElementById('pricePreview');
const form = document.getElementById('coffeeForm');
const layersContainer = document.getElementById('coffeeLayers');

const prices = {
  syrup: 1.5, 
  extra: {
    "Whipped Cream": 2.0,
    "Cinnamon": 1.0,
    "Decaf": 1.0
  },
  size: {
    "Small": 0,
    "Medium": 2.5,
    "Large": 4
  },
  base: {
    "Espresso": 8,
    "Americano": 10,
    "Ristretto": 9,
    "Cold Brew": 12,
    "Hot Water": 5
  }
};

const layerColors = {
  "Espresso": "#6f4e37",
  "Americano": "#3e2e1e",
  "Ristretto": "#4b2c20",
  "Cold Brew": "#3b2a26",
  "Hot Water": "#dbe9f4",

  "Whole milk": "#fff6e5",
  "Skim milk": "#fdfdfd",
  "Oat milk": "#f5e3c0",
  "Almond milk": "#f6e6ce",
  "Soy milk": "#fdf0c2",
  "Coconut milk": "#fbf5e4",

  "Vanilla": "#f3e5ab",
  "Caramel": "#e1a95f",
  "Hazelnut": "#c19a6b",
  "Cardamom": "#d0e1c2",
  "Date syrup": "#a9745c",

  "Whipped Cream": "#ffffff",
  "Cinnamon": "#d2691e",
  "Decaf": "#a89f91"
};

const layerHeights = {
  "Espresso": 40,
  "Americano": 45,
  "Ristretto": 35,
  "Cold Brew": 50,
  "Hot Water": 30,
  "Whole milk": 25,
  "Skim milk": 25,
  "Oat milk": 25,
  "Almond milk": 25,
  "Soy milk": 25,
  "Coconut milk": 25,
  "Vanilla": 20,
  "Caramel": 20,
  "Hazelnut": 20,
  "Cardamom": 15,
  "Date syrup": 15,
  "Whipped Cream": 35,
  "Cinnamon": 10,
  "Decaf": 10
};

function animatePriceChange() {
  priceElement.classList.add('bump');
  setTimeout(() => priceElement.classList.remove('bump'), 200);
}

// Оновлена функція addLayer з рандомною анімацією і висотою шару
function addLayer(name) {
  const div = document.createElement('div');
  div.className = 'layer';
  div.style.backgroundColor = layerColors[name] || '#ccc';
  div.title = name;
  
  // Висота шару
  div.style.height = (layerHeights[name] || 25) + 'px';
  
  // Рандомна затримка анімації для "живої" хвилі
  div.style.animationDelay = (Math.random() * 3) + 's';
  
  layersContainer.appendChild(div);
}

function updateVisualLayers() {
  layersContainer.innerHTML = ''; // Очистити попередні шари

  const base = form.elements["base"].value;
  addLayer(base);

  const milk = form.elements["milk"].value;
  addLayer(milk);

  const syrups = form.querySelectorAll('input[name="syrup"]:checked');
  syrups.forEach(el => addLayer(el.value));

  const extras = form.querySelectorAll('input[name="extra"]:checked');
  extras.forEach(el => addLayer(el.value));
}

function calculatePrice() {
  let total = 0;

  const base = form.elements["base"].value;
  total += prices.base[base];

  const syrups = form.querySelectorAll('input[name="syrup"]:checked');
  total += syrups.length * prices.syrup;

  const extras = form.querySelectorAll('input[name="extra"]:checked');
  extras.forEach(e => {
    total += prices.extra[e.value] || 0;
  });

  const size = form.elements["size"].value;
  total += prices.size[size];

  priceElement.textContent = total.toFixed(2);
  pricePreview.textContent = total.toFixed(2);
  animatePriceChange();
  updateVisualLayers();
}

form.addEventListener('change', calculatePrice);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Added to order!");
});

calculatePrice();
