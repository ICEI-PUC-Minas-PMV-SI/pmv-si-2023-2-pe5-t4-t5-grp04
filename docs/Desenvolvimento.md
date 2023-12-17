# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| cadastro de tutor | ALTA | Cadastre-index.html |
|RF-002| deletar conta | BAIXA | NA |
|RF-003| alterar dados da conta | BAIXA | NA |
|RF-004| logar | ALTA | Login-index.html |
|RF-005| desloGar | ALTA | NA |
|RF-006| instruir tutor | MEDIA | Instrucoes-index.html |
|RF-007| cadastro de pet vinculado ao tutor | ALTA | Addpet-index.html |
|RF-008| deletar o seu pet | BAIXO | AtuPet-index.html |
|RF-009| alterar os dados do seu pet | BAIXO | AtuPet-index.html |
|RF-0010| visualizar apenas seus pets | MEDIA | MeusPets-index.html |
|RF-0011| visualizar pets para adoção | ALTA | QueroAdotar-index.html |

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

