import '../styles/product.css'
import { useState } from 'react'

import product from '../assets/images/product.jpg'

import { ProductModal } from '../components/ProductModal'

export function Product() {

    const [isProductModalVisible, setIsProductModalVisible] = useState(false);

    return (
        <div>
            <button className="btn-product"onClick={() => setIsProductModalVisible(true)}>
                <div className="product">
                <strong>Nome produto <p>Ingredientes produto</p> </strong>
                    <img src={product} alt="Imagem Produto" />
                    <p>Valor produto</p>
                </div>  
            </button> 
            <div className="modal-product">
                {isProductModalVisible ? (
                    <ProductModal onClose={() => setIsProductModalVisible(false)}> 
                        
                    </ProductModal>
                ) : null}
            </div>
        </div>
             
    )
} 