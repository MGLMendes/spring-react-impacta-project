function VisualizarProd({vetorProdutos, selecionar}) {
    return (

        <div>
            <section>
                <div className="container">
                    <h1>Produtos</h1>
                    <div className="cards">
                            {
                                vetorProdutos.map((produto, index) => (
                                <div className="card">
                                    <div key={index} className="card-body">
                                        <h3>{produto.nome}</h3>
                                        <p>
                                            {produto.marca}
                                        </p>
                                        <button onClick={() => {selecionar(index)}} className="btn btn-success">Selecionar</button>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                </div>
            </section>
        </div>

    )
}

export default VisualizarProd;