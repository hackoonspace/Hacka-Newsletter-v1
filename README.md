# Hacka Newsletter

Projeto de site newsletter para a comunidade [HackoonSpace](https://hackoonspace.com), utilizando TypeScript, integrações com a API do [Mailchimp](https://mailchimp.com/pt-br/) e [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) do Google. 

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
- `RECAPTCHA_SECRET_KEY`: Chave secreta (usada no servidor) do reCAPTCHA V3
- `RECAPTCHA_PUBLIC_KEY`: Chave pública (usada no cliente) do reCAPTCHA V3
- `CONTENT_SECURITY_POLICE_GOOGLE_HASH`: Hash 256 do script inline do Google reCAPTCHA V3 ([leia mais sobre isso e saiba como obter aqui](https://content-security-policy.com/hash/))

## A fazer

- Hospedagem em domínio próprio (fora do Heroku)
- Mandar e-mail de ao se cadastrar/descadastrar na newsletter

## Imagens

![Página principal do site](https://github.com/hackoonspace/Hacka-Newsletter-v1/blob/main/docs/img1.png)

## Autores:
- Marcus Vinícius Natrielli Garcia ([@InfiniteMarcus](https://github.com/InfiniteMarcus))