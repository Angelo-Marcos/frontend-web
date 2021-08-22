import '../styles/productModal.css'
import product from '../assets/images/product.jpg'

export function ProductModal({id='modal', onClose = () => {}, nome, ingredientes, imageUrl, preco}) {
    
    const handleOutsideClick = (event) => {
        event.preventDefault();
        
        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="product-modal" onClick={handleOutsideClick}>
            <div className="container-product">
                <div className="content-img">
                    <img src={imageUrl} alt="Imagem Produto" />
                </div>
                <div className="content-main">
                    <header className="header-product">
                        <p>
                        {nome}
                        </p>
                        
                        <button className="close" onClick={onClose}/>
                    </header>

                    <p>{ingredientes}</p>

                    <div className="product-rodape">
                        <div className="product-counter">
                            <button type="button" >-</button>
                            <div className="quant">1</div>
                            <button type="button" >+</button>
                            
                        </div>
                        <button className="product-button" type="submit">
                            <strong>Adicionar</strong>
                            <p>R$ {preco}</p>
                        </button>
                    </div>

                </div>
                
            
                
            </div>
        </div>
    )
}