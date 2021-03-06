import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import logo from '../assets/images/logo.png'

import { UserModal } from '../components/UserModal'

import '../styles/loginAdmin.css'
// import '../styles/UserModal.css'

export function LoginAdmin() {
    const history = useHistory();

    // function navigateToPedido() {
    //     history.push('/pedido/');
    // }

    function navigateToInserirProdutos() {
        history.push('/produtos')
    }

    const [isUserModalVisible, setIsUserModalVisible] = useState(false);

    return (
        <div id="page-home">
            <div className="title">
                <img src={logo} alt="Logo do Restaurante" />
                <strong>Delícia Caseira</strong>



                <div className="separator">Insira as informações abaixo para realizar o login</div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o seu usuario"
                    />
                    <input
                        type="text"
                        placeholder="Digite a sua senha"
                    />

                    <div className="buttons">

                        <button className="btn-main" onClick={navigateToInserirProdutos}>Entrar</button>
                        {isUserModalVisible ? (
                            <UserModal onClose={() => setIsUserModalVisible(false)}>

                            </UserModal>
                        ) : null}
                    </div>

                </form>





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