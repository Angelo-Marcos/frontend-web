import '../styles/produtosModal.css'

export function ProdutosModal({ id = 'modal', onClose = () => { }, children }) {

    const handleOutsideClick = (event) => {
        event.preventDefault();

        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="produtos-modal" onClick={handleOutsideClick}>
            <div className="container">

                <div className="produtos-button" >
                    <header>
                        <button className="close" onClick={onClose} />
                    </header>

                    <form>
                        <input
                            type="text"
                            placeholder="Produto"
                        />
                        <input
                            type="text"
                            placeholder="ingredientes"
                        />
                        <input
                            type="text"
                            placeholder="Valor"
                        />

                    </form>


                    <div className="produtos-rodape">

                        <button className="produtos-button-altura" type="submit">
                            <strong>Adicionar</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}