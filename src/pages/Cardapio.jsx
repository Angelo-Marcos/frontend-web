import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import logo from '../assets/images/logo.png'
import { ProductView } from '../components/ProductView'

import '../styles/pedido.css'
import { ListProducts } from '../components/ListProducts'


export function Cardapio() {
    const [ products, setProducts] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        
        if (search) {
            params.nome_like = search;
        }

        axios.get('http://localhost:5000/products', { params })
            .then((response) => {
                setProducts(response.data);
            });
    }, [search]);
    return ( 
        <div id="page-pedido">
            <div className="header">
                <img src={logo} alt="Logo do Restaurante" />
                
                <p>Confira nossas opções! Ou <Link to="/">volte aqui</Link> para fazer um pedido!</p>
                <div></div>
                
            </div>
            
                <ListProducts products={products} loading={!products.length}/>
                

            
        </div>
    )
}