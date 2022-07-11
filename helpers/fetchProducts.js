const fetchProducts = async (productName) => {
  if (productName === undefined) {
    throw new Error('You must provide an URL');
  }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
};

// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
