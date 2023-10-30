package br.com.impacta.produtos.service;

import br.com.impacta.produtos.model.Produto;

public interface ProdutoService {

    Iterable<Produto> listar();

    Produto cadastrar(Produto produto);

    void atualizar(Produto produto, Long id);

    void remover(Long id);
}
