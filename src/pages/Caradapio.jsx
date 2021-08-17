import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import product from '../assets/images/product.jpg'

import '../styles/pedido.css'


export function Cardapio() {
    return ( 
        <div id="page-pedido">
            <div className="header">
                <a href="#"><img src={logo} alt="Logo do Restaurante" /></a> 
                
                <p>Confira nossas opções! </p>
                <div></div>
                
            </div>
            <main>
                <div className="product">
                    <strong>Nome produto <p>Ingredientes produto</p> </strong>
                    
                    <img src={product} alt="Imagem Produto" />
                    <p>Valor produto</p>
                </div>
                <div className="product">
                    <strong>Nome produto <p>Ingredientes produto</p> </strong>
                    
                    <img src={product} alt="Imagem Produto" />
                    <p>Valor produto</p>
                </div>
            </main>
            
        </div>
    )
}