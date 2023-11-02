
import './App.css';
import Formulario from './Formulario';
import VisualizarProd from './VisualizarProd';

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

      if (retorno_convertido.status === 400) {
        alert(retorno_convertido.detail)
      } else {
        setProdutos([...produtos, retorno_convertido]);
        alert("Produto cadastrado com sucesso!")
        limparFormulario()
      }
    })
  };

  // Remover Produto
  const remover = () => {
    console.log(objProduto)
    fetch("http://localhost:8989/produtos/remover/"+objProduto.id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      console.log(retorno_convertido)
      if (retorno_convertido.mensagem === "Deu certo") {
        alert("Produto excluído com sucesso")

        let produtosTemp = [...produtos]
        let index = produtosTemp.findIndex((prod) => {
          return prod.id === objProduto.id
        })

        produtosTemp.splice(index, 1)

        setProdutos(produtosTemp)
        limparFormulario()
      } else {
        alert("Erro ao excluir produto")
      }
    })
  };

  // Atualizar Produto
  const atualizar = () => {
    fetch("http://localhost:8989/produtos/atualizar/"+objProduto.id, {
      method: "put",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if (retorno_convertido.status === 400) {
        alert(retorno_convertido.detail)
      } else {
        alert("Produto atualiazado com sucesso!")
        let produtosTemp = [...produtos]
        let index = produtosTemp.findIndex((prod) => {
          return prod.id === objProduto.id
        })

        produtosTemp[index] = objProduto

        setProdutos(produtosTemp)
        limparFormulario()
      }
    })
  };

  // Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto)
    setBtnCadastrar(true)
  }

  // Selecionar Produto
  const selecionarProduto = (indice) => {
    console.log(produtos[indice])
    setObjProduto(produtos[indice])
    setBtnCadastrar(false)
  }

  // Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} atualizar={atualizar}/>
      <VisualizarProd vetorProdutos={produtos} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
