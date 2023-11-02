# Projeto Frameworks Full Stack Faculdade Impacta

## Passo a passo:  

Ambiente Pre: 
  
Pré Requisitos de programas instalados:  
Java 11 ou 17.  
Node JS na sua última versão.   
Visual Studio Code.  
IntelliJ IDEA

1. Faça o clone do projeto: git clone https://github.com/MGLMendes/spring-react-impacta-project.git.  
2. No IntelliJ IDEA abra o projeto backend/produtos e rode o arquivo ProdutosApplication.main().  
3. No Visual Studio Code abra a pasta frontend/front, nessa pasta abra um terminal e rode o comando: npm start.  
4. Quando o node iniciar, entre na url que ele disponibilizará.  
5. Para cadastrar um produto digite o nome e a marca do produtos, nos devidos inputs e clique em 'Cadastrar'.  
6. Para alterar um produto clique no botão 'Selecionar' e altere nome e/ou marca e clique em 'Alterar'.  
7. Para remover um produto clique no botão 'Selecionar' e depois clique em 'Remover'.
  
Ambiente Pro:  
  
Pré Requisitos de programas instalados:  
Java 11 ou 17.  
Node JS na sua última versão.   
Visual Studio Code.  
IntelliJ IDEA   
MySql    
  
1. Faça o clone do projeto: git clone https://github.com/MGLMendes/spring-react-impacta-project.git.  
2. No IntelliJ IDEA abra o projeto backend/produtos, com o projeto aberto entre no arquivo application.properties e mude de spring.profiles.active=pre para spring.profiles.active=pro  
3. Ainda com o IntelliJ aberto, entre no arquivo application-pro.properties e configure as linhas 3: spring.datasource.username=${USER_DATABASE} e 4: spring.datasource.password=${PW_DATABASE} para que ${USER_DATABASE} seja o usuário cadastrado no seu MySql e ${PW_DATABASE} seja a senha configurada no seu MySql. Lembrando que se a port do seu MySql não estiver rodando no 3306, mude na linha 2: spring.datasource.url=jdbc:mysql://localhost:3306/spring-react-impacta?createDatabaseIfNotExist=true&serverTimezone=UTC, onde está localhost:3306 seja a sua port.  
4. Feita essas alterções nos arquivos .properties mencionados acima, rode o arquivo ProdutosApplication.main().  
5.  No Visual Studio Code abra a pasta frontend/front, nessa pasta abra um terminal e rode o comando: npm start.  
6.  Quando o node iniciar, entre na url que ele disponibilizará.  
7.  Para cadastrar um produto digite o nome e a marca do produtos, nos devidos inputs e clique em 'Cadastrar'.  
8.  Para alterar um produto clique no botão 'Selecionar' e altere nome e/ou marca e clique em 'Alterar'.  
9.  Para remover um produto clique no botão 'Selecionar' e depois clique em 'Remover'.  
