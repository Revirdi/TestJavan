const axios = require("axios");

var url = "https://dummyjson.com/products/search?q=";

async function getPrice(nama) {
  try {
    const cekHarga = await axios.get(`${url}${nama}`);
    return cekHarga.data.products[0].price;
  } catch (error) {}
}

module.exports = getPrice;
