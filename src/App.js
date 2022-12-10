//Importer les modules dont on a besoin
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
//Creer le composant 
class App extends Component{
  render(){
    return(
      <>
      <Navbar />
        <Routes>
        <Route path='/' element = {<ProductList />} />
        <Route path='/detail' element = {<Details />} />
        <Route path='/cart' element = {<Cart />} />
        <Route element = {<Default />} />
        </Routes>
        <Modal />
      </>
    )
  }
}

//exporter le composant pour le rendre disponible
export default App