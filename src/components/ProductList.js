import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProdutConsumer} from '../context'
class ProductList extends Component {
  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            <Title name='Our' title='Products' />
            <div className='row'>
              <ProdutConsumer>
                {value =>{
                  return value.products.map(product =>{
                    return <Product key={product.id} product={product} ha />
                  })
                }}
              </ProdutConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default ProductList