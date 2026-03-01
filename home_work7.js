var str = "Wonderful Time Task Apple Joyful Happiness";
var reg = /\b[^Aa\s]{6,}\b/g;
const result = str.match(reg);
console.log(result);