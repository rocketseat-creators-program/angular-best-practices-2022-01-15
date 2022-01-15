<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Boas práticas em aplicações Angular com Componentização, Pipes e Diretivas

Nessa aula iremos aprender algumas das diversas boas práticas que podem ser utilizadas em aplicações Angular. Vamos abordar assuntos como Lazy Loading, Componentização, Pipes, melhora de performance com a diretiva ngFor e estrutura de pastas.

- [Template utilizado na aula](https://github.com/rocketseat-experts-club/angular-best-practices-2022-01-15/tree/template)

## Tecnologias

- [Angular](https://angular.io/)
- [Node](https://nodejs.org/en/)

## Links úteis

- [Angular CLI](https://angular.io/cli)
    - [generate](https://angular.io/cli/generate)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [Font Awesome](https://fontawesome.com)
- [RxJS](https://rxjs.dev/guide/operators#creation-operators)
- [Date-Fns](https://date-fns.org/)

## Ambiente, recursos e requisitos necessários

- Node 16.13.1 (LTS);
- Seu editor de código de preferência (No meu caso, Visual Studio Code);
- Familiaridade com HTML, CSS e JavaScript;
- Vontade de aprender :D

## Comandos utilizados
- npm install –save date-fns
- ng generate pipe shared/pipes/age
- ng generate pipe shared/pipes/shortName
- ng generate component shared/components/student-card-list
- ng generate component shared/components/select-course

## Testando a aplicação
- Clone o repositório para a sua máquina
- Abra um terminal na pasta principal da aplicação
- Instale todas as dependências da aplicação utilizando o seguinte comando:
    ```
    npm install
    ```
- Antes de inicializar nossa aplicação, é necessário subir nossa fake API (Back-end server):
    ```
    npm run server
    ```
- Para rodar a aplicação, execute o comando:
    ```
    npm start
    ```
- Abra o seu browser na seguinte URL: http://localhost:4200
