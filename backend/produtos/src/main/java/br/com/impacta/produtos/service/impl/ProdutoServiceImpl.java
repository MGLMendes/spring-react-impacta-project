package br.com.impacta.produtos.service.impl;

import br.com.impacta.produtos.model.Produto;
import br.com.impacta.produtos.repository.ProdutoRepository;
import br.com.impacta.produtos.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProdutoServiceImpl implements ProdutoService {

    private final ProdutoRepository produtoRepository;

    @Override
    public List<Produto> listar() {
        return produtoRepository.findAll();
    }

    @Override
    public Produto cadastrar(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public Produto atualizar(Produto produto, Long id) {

        Optional<Produto> produtoById = produtoRepository.findById(id);

        if (produtoById.isPresent()) {
            produtoById.get().setId(id);
            produtoById.get().setNome(produto.getNome());
            produtoById.get().setMarca(produto.getMarca());

             return produtoRepository.save(produtoById.get());
        }
        return null;
    }

    @Override
    public void remover(Long id) {
        Optional<Produto> produtoById = produtoRepository.findById(id);
        produtoById.ifPresent(produtoRepository::delete);
    }
}
