import '../styles/product.css'
import { useState } from 'react'

import product from '../assets/images/product.jpg'

import { ProductModal } from '../components/ProductModal'

export function ProductView( nome, ingredientes, imageUrl, preco) {


    return (
        <div>
            <button className="btn-product">
                <div className="product">
                <strong>{nome}<p>{ingredientes}</p> </strong>
                    <img src={imageUrl} alt="Imagem Produto" />
                    <p>R$ {preco}</p>
                </div>  
            </button> 
            
        </div>
             
    ) 
} 