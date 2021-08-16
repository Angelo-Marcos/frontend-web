import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'

import '../styles/home.css'

export function Home() {
    return ( 
        <div id="page-home">
            <div className="title">
                <img src="" alt="" />
                <strong>Delícia Caseira</strong>
                <p>Faça o seu pedido!</p>
            </div>
            <div className="buttons">
                <button>Fazer Pedido</button>
                <button>Ver Cardápio</button>
            </div>
            <div className="redes-sociais">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="" />
                    <p>Facebook</p> <br />
                    <strong>DELÍCIA CASEIRA</strong>
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="" />
                    <p>Instagram</p>
                    <strong>@DELICIACASEIRA</strong>
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="" />
                    <p>Twitter</p>
                    <strong>@DELICIACASEIRA</strong>
                </a>
            </div>
        </div>
    )
}