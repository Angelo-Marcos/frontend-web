import '../styles/product.css'
import { useState } from 'react'

import adicionar from '../assets/images/adicionar.png'

import { ProdutosModal } from '../components/ProdutosModal'

import { Link } from 'react-router-dom'

import exit from '../assets/images/exit.png'


export function Produtos() {

    const [isProductModalVisible, setIsProductModalVisible] = useState(false);

    return (
        <div>
            <button className="btn-product" onClick={() => setIsProductModalVisible(true)}>

                <div className="exit-buy">
                    <Link to="/"><img src={exit} alt="Exit" /></Link>
                    <button><img src={adicionar} alt="Buy" /></button>
                </div>

            </button>
            <div className="modal-product">
                {isProductModalVisible ? (
                    <ProdutosModal onClose={() => setIsProductModalVisible(false)}>
                    </ProdutosModal>
                ) : null}
            </div>
        </div>

    )
}