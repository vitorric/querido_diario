# API MEU QUERIDO DIÁRIO

API do Querido diário desenvolvida em NodeJS juntamente com o MongoDB.

# Estrutura da API

- O fluxo da API é: rota -> serviço -> repositório -> model

- Para cada rota existe um serviço exclusivo, para que assim, se houver problema em alguma rota, aconteça isoladamente.

- Os repositórios podem ser usados por 1 ou mais serviço.

- Para acessar a API, é necessário um token de autenticação JWT.

- A nomeção das rotas é feita da seguinte forma: /api/tipo_token/servico/metodo. O tipo_token seria os donos do token, por exemplo, uma rota exclusiva para usuário e outra exclusiva para admin.

  
# Configuração do Ambiente

- Instale o [NodeJS](https://nodejs.org/en/);

- Instale o [Git](https://git-scm.com/downloads)

- Instale o [MongoDB](https://www.mongodb.com/try/download/community)

Instale o [nodemon](https://www.npmjs.com/package/nodemon) para rodar a API, para isso, abra o terminal e rode o seguinte comando:

`npm i g nodemon`

# Iniciar API

1) Faça o clone do projeto

2) Vá até o diretório aonde foi feito o clone (lembre-se de estar no projeto do back-end), e no terminal, rode o comando:

`npm install`

3) Após o termino da instalação dos pacote, crie um arquivo chamado **.env.local** abra ele e insira os parâmetros de configuração da API. Use o arquivo **.env.example** como base.

4) Feito isso, basta iniciar a API, usando os comandos:

`NODE_ENV=local nodemon` ou então `npm run local` - para rodar em ambiente localhost

# Documentação

Execute o comando `npm run gen-doc` para gerar a documentação da API. O arquivo da documentação é um **index.html** fica dentro da pasta **apidoc**

# Testes

Antes de realizar os testes, crie um novo arquivo chamado **env.test**, preencha novamente os parâmetros da API (Você pode criar bancos diferentes para que os testes não desconfigure seu banco atual de desenvolvimento).

Feito isso, para realizar o teste da API, execute o comando:

`npm run test`

Para realizar um teste de cobertura, execute o comando:

`npm run test-cover`

Abra o **index.html** dentro da pasta **covarage** pra verificar o que de código foi testado

Abra o **index.html** dentro da pasta **mochawesome-report** para verificar detalhadamente os testes rodados.

