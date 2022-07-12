require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
  it('should fetch when called with "MLB1615760527" as an argument', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('should go to the endpoint "https://api.mercadolibre.com/items/MLB1615760527" when called with "MLB1615760527" as an argument', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    const response = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toBeCalledWith(response);
  });
  it('should have a return similar to object "item"', async () => {
    expect.assertions(1);
    const x = await fetchItem('MLB1615760527');
    expect(x).toEqual(item);
  });
  it('should return an error message if no argument is provided', async () => {
    expect.assertions(1);
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
