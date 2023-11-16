# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| cadastro de tutor | ALTA | index.html |
|RF-002| deletar conta | BAIXA | cadastro-noticia.html |
|RF-003| alterar dados da conta | BAIXA | cadastro-noticia.html |
|RF-004| logar | ALTA | cadastro-noticia.html |
|RF-005| desloGar | ALTA | cadastro-noticia.html |
|RF-006| instruir tutor | MEDIA | cadastro-noticia.html |
|RF-007| cadastro de pet vinculado ao tutor | ALTA | cadastro-noticia.html |
|RF-008| deletar o seu pet | BAIXO | cadastro-noticia.html |
|RF-009| alterar os dados do seu pet | BAIXO | cadastro-noticia.html |
|RF-0010| visualizar apenas seus pets | MEDIA | cadastro-noticia.html |
|RF-0011| visualizar pets para adoção | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

## Tutor
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do tutor              | 1                                              |
| nome           | Texto             | nome ou apelido do tutor                  | josé da silva                                  |
| email          | Texto             | email do dutor para facilitar a adoção    | jose@gmail.com                                 |
| telefone       | Texto             | telefone do tutor para facilitar a adoção | (31)9 1234-5678                                |

## Pet
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do pet                | 1                                              |
| nome           | Texto             | nome do pet                               | marley                                         |
| porte          | Texto             | tamanho do pet                            | médio                                          |
| dtResgate      | Texto             | data em que o pet foi resgatado           | 16/11/2023                                     |
| mtAdoção       | Texto             | motivo da adoção                          | Me mudei para um apartamento menor             |

