const expect = require('chai').expect;

import {
  mySpends,
  ShoppingCart,
  Discount
} from '../src/behaviour/chain_of_responsability';

describe('chain of resp pattern', () => {

    describe('Example 1', () => {
      it('should create class MySpend with empty spends', () => {
        const spends = new mySpends();
        const currentSpends = spends.initialVal;
    
        expect(currentSpends).to.equal(0);
      })
    
      it('should create class MySpend with spends 70', () => {
        const spends = new mySpends();
        const currentSpends = spends.add(50).add(20).initialVal;
    
        expect(currentSpends).to.equal(70);
      })
    })
    
    describe('Example 2', () => {
      it('should return discount 0,1 if order sum > 500$', () => {
        const discount = new Discount();
    
        const sc = new ShoppingCart();
        sc.addProduct(1000);
    
        let resp = discount.calc(sc.products);
    
        expect(resp).to.equal(0.1);
      });
    
      it('should return discount 0,05 if order quantity > 3', () => {
        const discount = new Discount();
    
        const sc = new ShoppingCart();
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);
    
        let resp = discount.calc(sc.products);
    
        expect(resp).to.equal(0.05);
      });
    
      it('should return discount 0,15 if order quantity > 3 and sum > 500$', () => {
        let discount = new Discount();
    
        let sc = new ShoppingCart();
        sc.addProduct(1000);
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);
    
        let resp = discount.calc(sc.products);
    
        expect(resp.toFixed(2)).to.equal('0.15');
      });
    })
 
});