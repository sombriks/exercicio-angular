# Exercício Angular

Pequeno estudo de caso de Angular para interfaces ricas

## Requisitos para rodar o exercício

- node 14 ou superior

## Tecnologias estudadas

- backend/serviço com api REST escrito em [koa](https://koajs.com/)
  - acesso a banco de dados com [knex](https://knexjs.org/)
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

O estudo consiste em tomar decisões de ‘design’ pra produzir a ‘interface’ que
implemente o comportamento esperado pelo sistema.

### Lotações

- Criar tela de listagem de lotações
- Permitir criar, alterar ou remover lotações
- Definir estratégia de componentização da nova funcionalidade

### Uso dos componentes do primeng

- Quais componentes serão usados pra montar a tela

### Correção de defeitos existentes

- Garantir que a tela de gabinetes está listando, filtrando e paginando certo

### Testes unitários

- A bateria de testes deve cobrir o 'happy path' das funcionalidades presentes
  no sistema

## Detalhes adicionais 

Cada módulo do projeto (front/service) possui um README.md próprio com mais
informações específicas pertinentes ao estudo. 
