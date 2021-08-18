import '../styles/productModal.css'

export function ProductModal({id='modal', onClose = () => {}, children}) {
    
    const handleOutsideClick = (event) => {
        event.preventDefault();
        
        if (event.target.id === id) onClose();
    };

    return (
        <div id={id} className="product-modal" onClick={handleOutsideClick}>
            <div className="container">
                <div className="content-img">
                    <img src="#" alt="Imagem Produto" />
                </div>
                <div className="content-main">
                    <header>
                        <p>
                        Nome Produto
                        </p>
                        
                        <button className="close" onClick={onClose}/>
                    </header>
                </div>
                
            
                
            </div>
        </div>
    )
}