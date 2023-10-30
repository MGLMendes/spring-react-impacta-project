
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

import { useEffect, useState } from 'react';

function App() {

  // Objeto Produto
  const produto = {
    id : 0,
    nome : '',
    marca : ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8989/produtos/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value})
  }

  // Cadastrar Produto
  const cadastrar = () => {
    fetch("http://localhost:8989/produtos/cadastrar", {
      method: "post",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      setProdutos([...produtos, retorno_convertido]);
      alert("Produto cadastrado com sucesso!")
    })
  };

  // Retorno
  return (
    <div>
      
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} />
      <Tabela vetorProdutos={produtos} />
    </div>
  );
}

export default App;
