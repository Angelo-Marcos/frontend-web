import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import exit from '../assets/images/exit.png'
import bag from '../assets/images/handbag.svg'


import '../styles/pedido.css'

import { Product } from '../components/Product'



export function Pedido() {

    return ( 
        <div id="page-pedido">
            <div className="header">
                <a href="#"><img src={logo} alt="Logo do Restaurante" /></a> 
                
                <p>Bem vindo, <strong>Angelo!</strong> </p>
                
                <div className="exit-buy">
                    <Link to="/"><img src={exit} alt="Exit" /></Link> 
                   <button><img src={bag} alt="Buy" /></button> 
                </div>
            </div>
            <main className="grid-main">
                
                <Product/>
                <Product/>
                <Product/>
                
                
                
            </main>
            
        </div>
    )
}