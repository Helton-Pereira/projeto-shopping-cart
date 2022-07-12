const fetchItem = async (productId) => {
  if (productId === undefined) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const data = await fetch(url);
  const result = await data.json();
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
