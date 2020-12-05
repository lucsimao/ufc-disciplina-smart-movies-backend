# Federal University of Ceará
# Desenvolvimento Web 2020.2
## Teacher:  José Marques Soares
##### Team: Lucas Costa, Mateus Landim

This project is a work from classroom Desenvolvimento Web 2020.2.
It will show mas and must have following features:

- Search for movies in theaters using [OMDb Api](http://www.omdbapi.com)
- Provide a set of views to search movies based on filters
- Allow user to buy movies ticket

# Sumário
- [Requirements](#Requirements)
- [Installation](#Installation)
- [Techs](#Techs)
- [Observations](#Observations)
- [References](#References)

# Requirements
- [Node.js](https://nodejs.org/) >= 12.x (Opcional)
- [Docker](https://www.docker.com/) >= 19.x
- [Docker Compose](https://docs.docker.com/compose/) >= 1.26.x

# Installation
## Local

To run node js in local environment, use:
```sh
$ git clone https://gitlab.com/desweb.ufc.2020.2/desweb2020-2.git
$ cd desweb2020-2
$ npm install
$ npm run dev
```

To run:
```sh
$ npm start
```

## Docker
Clone docker repo, then run:
```sh
$ git clone https://gitlab.com/desweb.ufc.2020.2/desweb2020-2.git
$ cd desweb2020-2
$ docker-compose up --build -d
```

## Testes
To run tests, you must have node installed in your environment then run:
```sh
$ npm test
```
## Lint
To run eslint, you must have node installed in your environment then run:
```sh
$ npm run lint
```

## Elasticsearch
To see generated logs on elasticsearch, visit: [Kibana](http://localhost:5601/app/kibana#/discover) then search with 'log-*' as filter.
OBS: Docker waits elastic search to be avaiable before start kibana, then maybe you must have to await some minutes before start kibana [iniciar o docker](#Docker).

# Techs
To this project development, it was utilized following techs, text editor and packages from [npm](https://www.npmjs.com/):

* [Node.js](https://nodejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)- text editor with the following plugins installed: [DotENV](https://github.com/mikestead/vscode-dotenv), [ESLint](https://github.com/Microsoft/vscode-eslint), [GitLens](https://github.com/eamodio/vscode-gitlens) e [vscode-icons](https://github.com/vscode-icons/vscode-icons).
* [Express](https://github.com/expressjs/express) - Framework para node.
* [Jest](https://jestjs.io/) - Js Test Framework
* [Winston](https://github.com/winstonjs/winston) - Log Library.
* [Ramda](https://ramdajs.com/) - To use lambda functions.
* [ESLint](https://github.com/eslint/eslint) - ESLint to code standardization.
* [Docker Compose](https://docs.docker.com/compose/) -Containers generation tool.
* [Elasticsearch](https://www.elastic.co/pt/) - Data persistence tool (Dos logs).
* [Kibana](https://www.elastic.co/pt/kibana) - Elasticsearch data visualization tool.


# Observations
-

# References
- [Node.js Best Pratices](https://github.com/i0natan/nodebestpractices)
- [Alura Courses](https://www.alura.com.br/)
- [Structured logging in Node.js with Winston and Elasticsearch](https://www.thedreaming.org/2020/06/24/structured-logging-nodejs/)
- [Running Elasticsearch v7.1.1 in Docker containers](https://github.com/justmeandopensource/elk/tree/master/docker)
- [Gitlab Ci/Cd](https://docs.gitlab.com/ee/ci/)
- [Fabio Akita - Entendendo Git](https://www.youtube.com/watch?v=6Czd1Yetaac)
- [Git flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [Semantic Commits](https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/)
