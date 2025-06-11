  const priceElement = document.getElementById('price');
  const form = document.getElementById('coffeeForm');

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

  function animatePriceChange() {
    priceElement.classList.add('bump');
    setTimeout(() => priceElement.classList.remove('bump'), 200);
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
    animatePriceChange();
  }

  form.addEventListener('change', calculatePrice);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Added to order!");
  });

  calculatePrice(); // initialize

