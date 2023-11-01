package br.com.impacta.produtos.service;

import br.com.impacta.produtos.model.Produto;
import br.com.impacta.produtos.model.dto.ProdutoDTO;

import java.util.List;

public interface ProdutoService {

    List<Produto> listar();

    Produto cadastrar(Produto produto);

    Produto atualizar(Produto produto, Long id);

    void remover(Long id);
}
