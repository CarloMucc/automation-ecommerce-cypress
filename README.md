# Documentação

Automação da jornada de cadastro de usuário com Cypress desenvolvido durante desafio do Agilizei Bootcamp.

![Animação](https://user-images.githubusercontent.com/105242340/167947458-1d954afe-ec00-4575-bd39-c78c28057164.gif)

**link para acesso do relatório gerado:**  https://carlomucc.github.io/automation-ecommerce-cypress/


## Aplicação utilizada para os testes automatizados:

![image](https://user-images.githubusercontent.com/105242340/167955418-30263c3d-acd5-466d-944d-39edcc93fa43.png)



A empresa Thunders, precisa garantir a integridade e a disponibilidade de seus serviços para clientes através de uma página de cadastro em seu site - automation practice.

Essa funcionalidade é a de cadastro de clientes em seu e-commerce, que possui diversos produtos disponíveis, categorias e promoções. Diariamente, novos clientes chegam ao site e precisam efetuar um cadastro para que possam comprar seus produtos, por isso essa funcionalidade é crítica para o negócio.

Para garantir a integridade deste serviço, você deve construir um teste automatizado que simule a jornada de usuário ao realizar um cadastro. Crie um novo projeto, faça as devidas configurações e desenvolva os scripts necessários para completar essa tarefa.

**Requisitos para o projeto:**

- os dados devem ser diferentes entre um teste e outro.
- não esqueça de adicionar asserções ao seu teste.
- utilizar o mochawesome como relatório de execução.
- subir o projeto no Github e enviar o link para correção.
- seu projeto deve ter um README, com descrição, GIF da execução e como executar.
- o repositório do desafio deve ser público, para fins de avaliação.
- não esqueça do arquivo .gitignore.
- não esqueça da execução no Github Actions.
- o relatório deve ser de fácil acesso, usando o Github Pages.

## Dependências instaladas e execução do projeto:

-  Instalar o Node Js (ambiente de execução Javascript) que contém o gerenciador de pacotes NPM.

- Para realizar a instalação do projeto e dependências execute o comando:


npm install

------------

- Para execução do projeto em modo Headless:


npm run cy:run

------------

- Para mesclar os relatórios gerados das specs em um único arquivo:

npm run report:merge

------------

-  Para gerar o relátorio em html dos resultados mergeados:

npm run report:mocha

------------

- Após o relatório ser gerado, execute o seguinte comando para excluir do projeto o arquivo anteriormente gerado:

npm run report:clean

------------

- Para execução dos testes em modo interativo, execute:

npm run cy:open

------------

