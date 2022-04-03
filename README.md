# Hacka Newsletter

Projeto de site newsletter para a comunidade [HackoonSpace](https://hackoonspace.com), utilizando TypeScript e integrações com a API do [Mailchimp](https://mailchimp.com/pt-br/). 

É possível acessá-la por meio [deste link](https://newsletter-hackoon.herokuapp.com/).

## Configuração de ambiente

Para quem deseja executar este projeto em sua própria máquina, é necessário:
- Ter o Node.js, o NPM e o TypeScript instalados em sua máquina
- Instalar os pacotes requeridos em `package.json`
- Criar um arquivo `.env` com as credenciais necessárias (usar `.env.example` como base)
- Utilizar o script `npm run build` para compilar os arquivos `.ts`
- Utilizar o script `npm run start` para executar

### Variáveis de ambiente

As variáveis de ambiente necessárias para este projeto são:
- `MAILCHIMP_API_KEY`: chave de API da plataforma Mailchimp
- `MAILCHIMP_PREFIX`: prefixo do servidor em que sua conta Mailchimp se localiza
- `MAILCHIMP_LIST_ID`: ID da lista de contatos criada na sua conta Mailchimp

## A fazer

### Site da newsletter
- Decisões de projeto para evitar flood e ataques (ex: Recaptcha)
- Talvez hospedagem em domínio próprio

### Envio dos e-mails
- Design base dos e-mails da newsletter
- Mandar e-mail de ao se cadastrar/descadastrar na newsletter

## Imagens

![Página principal do site](https://github.com/hackoonspace/Hacka-Newsletter-v1/blob/main/docs/img1.png)

## Autores:
- Marcus Vinícius Natrielli Garcia ([@InfiniteMarcus](https://github.com/InfiniteMarcus))