# Exercício Angular

Pequeno estudo de caso de Angular para interfaces ricas

## Requisitos para rodar o exercício

- node 14 ou superior

## Tecnologias estudadas

- backend/serviço com api REST escrito em [koa](https://koajs.com/)
  - acesso e gerenciamento de banco de dados com [knex](https://knexjs.org/)
- frontend moderno escrito em [angular](https://angular.io/)
  - componentes de interface do [primeng](https://www.primefaces.org/primeng/)

## Aplicação de exemplo

Módulo de cadastros básicos de sistema jurídico

- Gerenciamento de pessoas e lotações
- Cadastro de pessoas (admin, advogados, procuradores e estagiários)
- Cadastro de setores
  - Varas
  - Gabinetes
  - Lotações (associar pessoas aos diferentes níveis dos setores)

## Aspectos a serem estudados

O estudo consiste em tomar decisões de design para produzir uma interface que
implemente o comportamento esperado pela descrição de sistema acima.

### Cadastro e listagem de pessoas

- Criar dialog de criação e edição de pessoas
- Implementar exclusão de pessoas

### Cadastro e listagem de setores

- Criar dialog de criaão e edição de setores
- Completar o filtro da listagem
- Implementar exclusão de setores
- Criar chamadas de serviço apropriadas

### Cadastro e listagem de varas

- Criar listagem de varas
- Criar filtro por setores
- Criar dialog de criaão e edição de varas
- Implementar exclusão de varas
- Criar chamadas de serviço apropriadas

### Cadastro e listagem de gabinetes

- Criar listagem de varas
- Criar filtro por varas
- Criar dialog de criaão e edição de varas
- Implementar exclusão de gabinetes
- Criar chamadas de serviço apropriadas

### Cadastro e listagem de lotações

- Criar tela de listagem de lotações
- Permitir criar, alterar ou remover lotações
- Criar chamadas de serviço apropriadas

### Uso dos componentes do primeng

- Quais componentes serão usados pra montar as telas

### Testes unitários

- A bateria de testes deve cobrir o 'happy path' das funcionalidades presentes
  no sistema

### Configuração de ambiente

- Melhorar a configuração de variáveis de ambiente
  - Uso do [dotenv-flow](https://npmjs.com/package/dotenv-flow) no service
  - Uso do [environments](https://angular.io/guide/build#configuring-application-environments) no front
- Ajustes para evitar versionamento de senhas e outros dados sensíveis (apontar estratégia)
- Ajustes na gestão e configuração do `environments.ts` do angular

### Segurança

- Implementar autenticação JWT

## Detalhes adicionais

Cada módulo do projeto (front/service) possui um `README.md` próprio com mais
informações específicas pertinentes ao estudo.

- Ver documentação do [front](front/README.md)
- Ver documentação do [service](service/README.md)
