package br.com.impacta.produtos.assemble;

import br.com.impacta.produtos.model.Produto;
import br.com.impacta.produtos.model.input.ProdutoInput;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProdutoInputAssemble {

    private final ModelMapper modelMapper;


    public Produto copyInputToEntity(ProdutoInput produtoInput) {
        return modelMapper.map(produtoInput, Produto.class);
    }
}
