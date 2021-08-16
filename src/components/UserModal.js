import '../styles/UserModal.css'

export function UserModal({id='modal', onClose = () => {}, children}) {
    
    const handleOutsideClick = (event) => {
        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="user-modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
                
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