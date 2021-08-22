import { useState } from 'react'
import { Link } from 'react-router-dom'


import logo from '../assets/images/logo.png'
import exit from '../assets/images/exit.png'
import adicionar from '../assets/images/adicionar.png'
import adicionar2 from '../assets/images/add.png'
import deletar from '../assets/images/delete2.png'



import '../styles/pedido.css'

import { Produtos } from '../components/Produtos'
import { Product } from '../components/Product'



export function InserirProdutos() {

    return (
        <div id="page-pedido">
            <div className="header">
                <a href="#"><img src={logo} alt="Logo do Restaurante" /></a>

                <p>Bem vindo, <strong>Angelo!</strong> </p>

                <div className="exit-buy">
                    <Link to="/"><img src={exit} alt="Exit" /></Link>
                    <button><img src={adicionar2} alt="Buy" /><Produtos /></button>
                </div>
            </div>
            <main className="grid-main">

                <Product />
                <Product />
                <Product />
                <Product />

            </main>

        </div>
    )
}