import '../styles/UserModal.css'

import logo from '../assets/images/logo.png'

export function UserModal({id='modal', onClose = () => {}, children}) {
    
    const handleOutsideClick = (event) => {
        event.preventDefault();
        
        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="user-modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
                {/* <img src={logo} alt="Logo do Restaurante" /> */}
                <div className="separator">Insira as informações abaixo</div>
                <form>
                    <input
                        type="number"
                        placeholder="Digite o seu cpf"
                    />
                    <input
                        type="text"
                        placeholder="Digite o seu nome ou apelido"
                    />
                    <button type="submit">
                        Confirmar
                    </button>
                </form> 
            </div>
        </div>
    )
}