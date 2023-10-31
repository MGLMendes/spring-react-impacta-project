package br.com.impacta.produtos.controller;

import br.com.impacta.produtos.assemble.ProdutoInputAssemble;
import br.com.impacta.produtos.disassemble.ProdutoDTODisassemble;
import br.com.impacta.produtos.model.dto.ProdutoDTO;
import br.com.impacta.produtos.model.input.ProdutoInput;
import br.com.impacta.produtos.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/produtos")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProdutoController {

    private final ProdutoService produtoService;

    private final ProdutoDTODisassemble produtoDTODisassemble;

    private final ProdutoInputAssemble produtoInputAssemble;

    @GetMapping("/listar")
    public ResponseEntity<List<ProdutoDTO>> listarProdutos()  {
        return ResponseEntity.ok(
                produtoDTODisassemble.copyCollectionEntityToCollectionDTO(produtoService.listar()));
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<ProdutoDTO> cadastrarProduto(@RequestBody @Valid ProdutoInput produto) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(produtoDTODisassemble.copyEntityToDTO(
                        produtoService.cadastrar(
                        produtoInputAssemble.copyInputToEntity(produto))));
    }

    @PutMapping("/atualizar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarProduto(@RequestBody @Valid ProdutoInput produto, @PathVariable Long id) {
        produtoService.atualizar(produtoInputAssemble.copyInputToEntity(produto), id);
    }

    @DeleteMapping("/remover/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removerProduto(@PathVariable Long id) {
        produtoService.remover(id);
    }
}
