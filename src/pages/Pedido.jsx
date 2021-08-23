import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import api from '../services/api'

import logo from '../assets/images/logo.png'
import exit from '../assets/images/exit.png'
import bag from '../assets/images/handbag.svg'

import { BagModal } from '../components/BagModal'


import '../styles/pedido.css'

import { Product } from '../components/Product'
import { ListProducts } from '../components/ListProducts'



export function Pedido() {
    const [isBagModalVisible, setIsBagModalVisible] = useState(false);

    const [ products, setProducts] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        
        if (search) {
            params.nome_like = search;
        }

        api.get("products", { params })
            .then((response) => {
                setProducts(response.data);
            });
    }, [search]);
    

    return ( 
        <div id="page-pedido">
            <div className="header">
                <img src={logo} alt="Logo do Restaurante" />
                
                <p>Bem vindo, <strong>Usuario!</strong> </p> 
                
                <div className="exit-buy">
                    <Link className="btn-buy" to="/"><img src={exit} alt="Exit" /></Link> 
                   <button className="btn-exit"onClick={() => setIsBagModalVisible(true)}><img src={bag} alt="Buy" /></button> 
                   {isBagModalVisible ? (
                    <BagModal onClose={() => setIsBagModalVisible(false)}> 
                        
                    </BagModal>
                ) : null}
                </div>
            </div>
            <div className="search">
            <input 
                type="search"
                className="input-product"
                placeholder="Buscar um produto" 
                value={search}
                onChange={(event) => setSearch(event.target.value)}

            />
            </div>

            <ListProducts products={products} loading={!products.length}/>
            
            
        </div>
    )
}