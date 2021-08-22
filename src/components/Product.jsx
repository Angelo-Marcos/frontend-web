import '../styles/product.css'
import { useState } from 'react'

import product from '../assets/images/product.jpg'

import { ProductModal } from '../components/ProductModal'

export function Product({ nome, ingredientes, imageUrl, preco}) {

    const [isProductModalVisible, setIsProductModalVisible] = useState(false);

    return (
        <div>
            <button className="btn-product" onClick={() => setIsProductModalVisible(true)}>
                <div className="product">

                <strong>{nome}<p>{ingredientes}</p> </strong>
                    <img src={imageUrl} alt="Imagem Produto" />
                    <p>R$ {preco}</p>
                </div>  
            </button> 
            <div className="modal-product">
                {isProductModalVisible ? (
                    <ProductModal 
                        onClose={() => setIsProductModalVisible(false)} 
                        nome={nome}
                        ingredientes={ingredientes}
                        imageUrl={imageUrl}
                        preco={preco}
                    /> 

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