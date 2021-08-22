import { useHistory } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import '../styles/userModal.css'

const initialValue = {
    cpf: 0,
    nome: ''
}

export function UserModal({id='modal', onClose = () => {}}) {
    const history = useHistory();
    const [values, setValues] = useState(initialValue);
    console.log(values)
    const handleOutsideClick = (event) => {
        event.preventDefault();
        
        if (event.target.id === id) onClose();
    };

    function onchange(event) {
        const {name, value} = event.target;

        setValues({...values, [name]: value});

    }

    function onSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:5000/user', values)
        .then((response) => {
            history.push('/pedido')
        })
    }

    function navigateToPedido() {
        history.push('/pedido/');
    }

    return (
        <div id={id} className="user-modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose}/>
                
                <div className="separator">Insira as informações abaixo</div>
                <form onSubmit={onSubmit}>
                    <input
                        type="number"
                        name="cpf"
                        placeholder="Digite o seu cpf"
                        onChange={onchange}
                    />
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite o seu nome ou apelido"
                        onChange={onchange}
                    />
                    <button type="submit" onClick={navigateToPedido} >Confirmar</button>
                </form> 
            </div>
        </div>
    )
}