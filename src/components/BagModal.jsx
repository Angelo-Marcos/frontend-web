import '../styles/bagModal.css'


export function BagModal({id='modal', onClose = () => {}, children}) {
    
    const handleOutsideClick = (event) => {
        event.preventDefault();
        
        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="bag-modal" onClick={handleOutsideClick}>
            <div className="container-bag-modal">
                <div className="content-main">
                    <header className="header-bag">
                        <strong>Seu pedido</strong>
                        
                        <button className="close-bag" onClick={onClose}/>
                    </header>
                    <div className="bag-product">
                        <p className="p-bag">
                            Nome Produto
                        </p>
                        <div className="bag-product-info">
                            <span>Quantidade</span>
                            <span>Preço</span>
                        </div>

                    </div>

                    <div className="bag-rodape">
                        
                        <button className="bag-button" type="submit">
                            Finalizar pedido
                        </button>
                    </div>

                </div>
                
            
                
            </div>
        </div>
    )
}