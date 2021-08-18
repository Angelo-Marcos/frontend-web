import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import logo from '../assets/images/logo.png'

import {UserModal} from '../components/UserModal'

import '../styles/home.css'
// import '../styles/UserModal.css'

export function Home() {
    const history = useHistory();

    function navigateToPedido() {
        history.push('/pedido/');
    }

    function navigateToCardapio() {
        history.push('/cardapio')
    }

    const [isUserModalVisible, setIsUserModalVisible] = useState(false);

    return ( 
        <div id="page-home">
            <div className="title">
                <img src={logo} alt="Logo do Restaurante" />
                <strong>Delícia Caseira</strong>
                <p>Faça o seu pedido!</p>
            </div>
            <div className="buttons">
                <button className="btn-main" onClick={() => setIsUserModalVisible(true)}>Fazer Pedido</button>
                <button className="btn-main" onClick={navigateToCardapio}>Ver Cardápio</button>
                {isUserModalVisible ? (
                    <UserModal onClose={() => setIsUserModalVisible(false)}> 
                    
                    </UserModal>
                    ) : null}
            </div>
            <div className="redes-sociais">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                    <p>Facebook</p>
                    <strong>DELÍCIA CASEIRA</strong>
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram" />
                    <p>Instagram</p>
                    <strong>@DELICIACASEIRA</strong>
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="Twitter" />
                    <p>Twitter</p>
                    <strong>@DELICIACASEIRA</strong>
                </a>
            </div>
        </div>
    )
}