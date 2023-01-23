# Front

Projeto frontend feito em angular js

## Como executar

```bash
npm install
npm start
```

## Como testar

```bash
npm install
npm run test:coverage
```

## Apelidos para o angular cli

Caso não esteja instalado a nível global, o angular cli (ng) está disponível
tanto via npx quando nos scripts npm.

Exemplo npx:

```bash
npx ng generate component pages/login
```

Exemplo script npm:

```bash
npm run ng generate service shared/api
```

## Aspectos avaliados no estudo

- Uso dos componentes do primeng
- Criação e ajustes dos casos de teste para cobrir os casos-base
- Compreensão do uso de variáveis de ambiente e do `environment.ts`
- Consumo da api REST

<hr/>
<hr/>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)
version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
