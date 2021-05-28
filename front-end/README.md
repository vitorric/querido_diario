# SISTEMA MEU QUERIDO DIÁRIO

# Configuração do Ambiente

- Instale o [Git](https://git-scm.com/downloads)

# Iniciar API

1) Faça o clone do projeto

2) Vá até o diretório aonde foi feito o clone (lembre-se de estar no projeto do front-end), e no terminal, rode o comando:

`npm install`

3) Após o termino da instalação dos pacote, crie um arquivo chamado **.env.local** abra ele e insira os parâmetros de configuração da sistema. Use o arquivo **.env.example** como base.

4) Feito isso, basta iniciar a API, usando os comandos:

`npm run local` - para rodar em ambiente localhost

# Build

1) Antes de buildar o projeto, é necessário configurar o **.env** de cada ambiente.

2) Após ter o ambiente configurado, rode o seguinte comando: ` npm run production`. Neste exemplo está sendo gerado um build para a produção com o **.env.production**, você pode criar novos ambientes, basta adicionar um novo **.env** e seguir os exemplos de comando para buildar no **package.json**