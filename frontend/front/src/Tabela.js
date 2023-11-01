function Tabela({vetorProdutos, selecionar}) {
    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
            { 
                vetorProdutos.map((produto, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.marca}</td>
                        <td><button onClick={() => {selecionar(index)}} className="btn btn-success">Selecionar</button></td>
                    </tr>
                ))
                
            }
            </tbody>
        </table>
    )
}

export default Tabela;