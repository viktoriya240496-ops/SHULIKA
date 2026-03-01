var services = {
  "стрижка": "60.25 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";
services["Фарбування"] = "850.90 грн";
services["Нарощування"] = "520.10 грн";

services.getPrices = function () {
  var result = [];
  var values = Object.values(this);

  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === "string") {
      result.push(Number.parseFloat(values[i]));
    }
  }

  return result;
};

services.price = function () {
  var prices = this.getPrices();
  var sum = 0;

  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  return sum + " грн";
};

services.minPrice = function () {
  var prices = this.getPrices();
  var min = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return min + " грн";
};

services.maxPrice = function () {
  var prices = this.getPrices();
  var max = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
    }
  }

  return max + " грн";
};

console.log(services.price());    
console.log(services.minPrice());  
console.log(services.maxPrice());  