import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import exit from '../assets/images/exit.png'
import bag from '../assets/images/handbag.svg'
import product from '../assets/images/product.jpg'

import '../styles/pedido.css'


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
            <main>
                <a href="#">
                    <div className="product">
                        <strong>Nome produto <p>Ingredientes produto</p> </strong>
                        
                        <img src={product} alt="Imagem Produto" />
                        <p>Valor produto</p>
                    </div>
                </a> 
                <div className="product">
                    <strong>Nome produto <p>Ingredientes produto</p> </strong>
                    
                    <img src={product} alt="Imagem Produto" />
                    <p>Valor produto</p>
                </div>
            </main>
            
        </div>
    )
}