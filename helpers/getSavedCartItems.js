const getSavedCartItems = (savedCartItems) => localStorage.getItem(savedCartItems);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
