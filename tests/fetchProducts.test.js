require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('should be a funtcion', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  it('should "fetch" when called with "computador" as an argument', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('should go to the correct endpoint', async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    const response = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    expect(fetch).toBeCalledWith(response);
  });
  it('should have a return similar to "computadorSearch"', async () => {
    expect.assertions(1);
    const x = await fetchProducts('computador')
    expect(x).toEqual(computadorSearch);
  });
  it('should return an error message if not argument is provided', async () => {
    expect.assertions(1);
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an URL'))
    }
  });
});
