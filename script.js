const cartItem = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductToShoppingCart = async (skuId) => {
  const product = await fetchItem(skuId);
  const result = createCartItemElement({ sku: `${product.id}`,
  name: `${product.title}`,
  salePrice: `${product.price}` });
  cartItem.appendChild(result);
  saveCartItems(cartItem.innerHTML);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(button);
  button.addEventListener('click', () => {
    const skuId = getSkuFromProductItem(section);
    addProductToShoppingCart(skuId);
});
  return section;
};

const getSavedItemsAddToShoppingCart = (localItems) => {
  const savedItems = getSavedCartItems(localItems);
  cartItem.innerHTML = savedItems;
  cartItem.addEventListener('click', cartItemClickListener);
};

// getSavedItemsAddToShoppingCart();

const listOfProducts = async (productName) => {
  const items = document.querySelector('.items');
  const product = await fetchProducts(productName);
  const { results } = product;
  results.forEach((e) => {
    const item = createProductItemElement(
      { sku: e.id, name: e.title, image: e.thumbnail },
      ); 
      items.appendChild(item);
  }); 
};

const removeItemsInCart = () => {
  const cart = document.querySelector('ol');
  cart.innerHTML = '';
};

const clearShoppingCart = () => {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', () => {
    localStorage.removeItem('cartItems');
    removeItemsInCart();
  });
};

window.onload = () => {
  listOfProducts('computador');
  getSavedItemsAddToShoppingCart('cartItems');
  clearShoppingCart();
};
