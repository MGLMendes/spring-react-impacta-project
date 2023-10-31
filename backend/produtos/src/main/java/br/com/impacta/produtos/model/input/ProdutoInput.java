package br.com.impacta.produtos.model.input;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class ProdutoInput {

    @NotBlank
    private String nome;
    @NotBlank
    private String marca;
}
