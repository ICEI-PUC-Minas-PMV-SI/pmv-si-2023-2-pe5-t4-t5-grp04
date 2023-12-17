# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Cadastrar**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, email, senha, e telefone e clica no botão "cadastrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam e tambem se um outro usuario com o mesmo email ja existe.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a a tela de login.
**Dados de entrada** | Inserção de dados válidos no banco de dados.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Logar**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa email e senha, depois clica em logar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-004
**Resultado esperado** | Entrar na área de meus pets
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Adicionar pet**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, raça, porte, telefone, data de resgate, img e depois clica em adicionar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>3) A aplicação insere as informações no banco de dados.
**Requisitos associados** | RF-007
**Resultado esperado** | Entrar na área de meus pets
**Dados de entrada** | Inserção de dados válidos no formulário de adicionar pet.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Atualizar pet**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, raça, porte, telefone, data de resgate, img e depois clica em atualizar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>3) A aplicação atualiza as informações no banco de dados.
**Requisitos associados** | RF-009
**Resultado esperado** | Entrar na área de meus pets
**Dados de entrada** | Atualização de dados válidos no formulário de adicionar pet.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Deletar pet**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica no botão deletar no carde referente ao pet desejado.<br>3) A aplicação deleta as informações no banco de dados.
**Requisitos associados** | RF-008
**Resultado esperado** | Entrar na área de meus pets
**Dados de entrada** | Atualização de dados válidos no formulário de adicionar pet.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

|*Caso de Teste*                                 |*TC-01 - Cadastrar*                                         |
|---|---|
|Requisito Associado | RF-001 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://clipchamp.com/watch/X6EunFgpTSV | 

|*Caso de Teste*                                 |*TC-02 -  Login*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem logar para serem autenticados.|
|Link do vídeo do teste realizado: | https://clipchamp.com/watch/X6EunFgpTSV | 

|*Caso de Teste*                                 |*TC-03 -  Adicionar Pet*                                         |
|---|---|
|Requisito Associado | RF-007 - Usuários autenticados podem cadastrar um pet.|
|Link do vídeo do teste realizado: | https://clipchamp.com/watch/X6EunFgpTSV | 

|*Caso de Teste*                                 |*TC-04 -  Atualizar Pet*                                         |
|---|---|
|Requisito Associado | RF-009 - Usuários autenticados podem atualizar um pet.|
|Link do vídeo do teste realizado: | https://clipchamp.com/watch/X6EunFgpTSV | 

|*Caso de Teste*                                 |*TC-05 -  Deletar Pet*                                         |
|---|---|
|Requisito Associado | RF-008 - Usuários autenticados podem deletar um pet.|
|Link do vídeo do teste realizado: | https://clipchamp.com/watch/X6EunFgpTSV | 


## Avaliação dos Testes de Software

As funcionaliddes desenvolvidas estão simples e intuitivas. Porem ainda devemos reorganizar a navegação do site para melhorar a usabilidade refazendo o menu e talvez o roda pé. Alem disso devemos consertar a parte de cadastrar e atualizar pet, para permitir ao usuario fazer o upload de uma imagem do seu pc para o site ao invez de utilizar uma imagem do google.

# Testes de Usabilidade

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja adotar um cachorro. Encontre no site um cachorro que vc se interessou |
| 2             | Você é uma pessoa que deseja colocar um cachorro para adoção. Adicione seu pet na adoção. |


0.9.11
3.17.01
## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja adotar um cachorro. Encontre no site um cachorro que vc se interessou

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 0:9.11 minutos                  |
| **Média**     | 100%           | 5                | 0:9.11 minutos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei intuitivo.

Cenário 2: Você é uma pessoa que deseja colocar um cachorro para adoção. Adicione seu pet na adoção.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 3:17.01 minutos                  |
| **Média**     | 100%           | 5                | 3:17.01 minutos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2:40.23 minutos |


    Comentários dos usuários: Achei intuitivo, mas gostaria que mantivesse minha conta aberta até eu deslogar.

## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista a sugestão do usuario, entendemos haver oportunidades de melhoria na usabilidade da aplicação.
