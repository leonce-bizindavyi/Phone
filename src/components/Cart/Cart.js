import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProdutConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
class Cart extends Component {
  render() {
    return (
      <section>
        <ProdutConsumer>
          {value=>{
            const cart = value.cart
            if(cart.length>0){
              return (
                <>
                <Title name='your' title="cart" />
                <CartColumns />
                <CartList value = {value} />
                <CartTotals value = {value} />
                </>
              )
            }else{
             return <EmptyCart />
            }
          }}
        </ProdutConsumer>
        
      </section>
    )
  }
}
export default Cart