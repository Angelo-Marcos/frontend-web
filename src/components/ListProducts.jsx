import { Product } from '../components/Product'

export function ListProducts({ loading, products}) {
    if (loading) {
        return <main className="grid-main"><span>Carregando...</span></main>
    }


    return (
        <main className="grid-main">
            {products.map((product) => (
                        <Product 
                            nome={product.nome} 
                            ingredientes={product.ingredientes}
                            imageUrl={product.imageUrl}
                            preco={product.preco}
                        />
                    ))}
        </main>
        
             
    )
} 