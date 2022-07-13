const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('should call localStorage.getItem', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('should call localStorage.getItem with', () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalledWith('cartItems')
  })
});
