
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

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8989/produtos/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, []);

  // Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} />
      <Tabela vetorProdutos={produtos} />
    </div>
  );
}

export default App;
