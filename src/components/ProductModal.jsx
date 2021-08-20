import '../styles/productModal.css'
import product from '../assets/images/product.jpg'

export function ProductModal({id='modal', onClose = () => {}, children}) {
    
    const handleOutsideClick = (event) => {
        event.preventDefault();
        
        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="product-modal" onClick={handleOutsideClick}>
            <div className="container">
                <div className="content-img">
                    <img src="" alt="Imagem Produto" />
                </div>
                <div className="content-main">
                    <header>
                        <p>
                        Nome Produto
                        </p>
                        
                        <button className="close" onClick={onClose}/>
                    </header>

                    <p>Ingredientes</p>

                    <div className="product-rodape">
                        <div className="product-counter">
                            <button type="button" >-</button>
                            <div>1</div>
                            <button type="button" >+</button>
                            
                        </div>
                        <button className="product-button" type="submit">
                            <strong>Adicionar</strong>
                            <p>Valor</p>
                        </button>
                    </div>

                </div>
                
            
                
            </div>
        </div>
    )
}