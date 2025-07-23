import { addtoCart, cart, loadFromStorage, removeFromCart } from "../../data/cart.js";

describe('test suite: addToCart', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  const input = document.createElement('input');
  input.className = `js-product-quantity-${productId1}`;
  input.value = '1';
  document.body.appendChild(input);

  beforeEach(() => {
    spyOn(localStorage, 'setItem')
  });
  

  it('adds an existing product to the cart', () => {

      spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    })

    loadFromStorage();

    addtoCart(productId1);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual(productId1)
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));

  });

  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    })

    loadFromStorage();

    addtoCart(productId1);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
  });


});


describe('test suite: removeFromCart', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    const productId3 = '34ght89h-34sg-4c30-7655-rtf6fto63443'
  beforeEach(() => {
    spyOn(localStorage, 'setItem')
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(   
      [{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1',
      },
      {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2',
      }
      ]);
    })
    loadFromStorage();
  })


  it('removes a productID in the cart', () => {
    removeFromCart(productId1);

    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    console.log(cart);
  })

  it('removes a non existing productID in the cart', () => {
    removeFromCart(productId3);

    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    console.log(cart);
  })
})