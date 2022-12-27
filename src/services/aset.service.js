const axios = require("axios");

var url = "https://dummyjson.com/products/search?q=";

async function getPrice(nama) {
  const cekHarga = await axios.get(`${url}${nama}`);
  if (cekHarga.data.products.length) return cekHarga.data.products[0].price;
  return null;
}

module.exports = getPrice;
