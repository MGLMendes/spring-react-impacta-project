package br.com.impacta.produtos.disassemble;

import br.com.impacta.produtos.model.Produto;
import br.com.impacta.produtos.model.dto.ProdutoDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProdutoDTODisassemble {

    private final ModelMapper modelMapper;

    public ProdutoDTO copyEntityToDTO(Produto produto) {
        return modelMapper.map(produto, ProdutoDTO.class);
    }

    public List<ProdutoDTO> copyCollectionEntityToCollectionDTO(List<Produto> produtos) {
        return produtos.stream().map(
                this::copyEntityToDTO
        ).collect(Collectors.toList());
    }
}
