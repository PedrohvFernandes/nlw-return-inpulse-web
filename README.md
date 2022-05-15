# NLW RETURN - Rocketseat <img  align='center' width='100px' src='https://yt3.ggpht.com/ytc/AKedOLQkXnYChXAHOeBQLzwhk1_BHYgUXs6ITQOakoeNoQ=s176-c-k-c0x00ffffff-no-rj'/>

<p align='center'>
<img src='https://github.com/PedrohvFernandes/nlw-return-impulse-feedback-widget/blob/master/screenshots/astronautaCodeNLWReturn.png'/>
</p>

## Sobre:
### - Qual o objetivo ?
O projeto da Rocketseat tem como objetivo impulsionar programadores que já estão inseridos no mercado de T.I e que querem avançar e aprofundar em novas tecnologias e em novos horizontes no mundão de TI.
### - Tá, mas como que irão fazer isso:
Construindo uma aplicação basica de feedbacks, a onde tera como pilares as seguintes tecnologis: React, React Native e NodeJS. E não é so isso, teremos também: SOLID(Principios pra deixar nosso codigo mais tranquilo de dar manutenção e mais testavel), Acessibilidade e Testes automatizados dentro do back-end. Isso tudo numa simples aplicação, fazendo com que aprenda de forma divertida e fácil.

## 🔖 Layout, prototipo e demonstração de como sera feito a aplicação
- Prototipo: https://www.figma.com/file/KpqZrTt8dBlk1k3osoFp2i/Feedback-Widget-(Community)?node-id=10%3A1638
- Demonstração Web: https://www.figma.com/proto/KpqZrTt8dBlk1k3osoFp2i/Feedback-Widget-(Community)?node-id=10%3A1722&scaling=min-zoom&page-id=10%3A1637&starting-point-node-id=10%3A1722
- Demonstração Mobile: https://www.figma.com/proto/KpqZrTt8dBlk1k3osoFp2i/Feedback-Widget-(Community)?node-id=113%3A2743&scaling=scale-down&page-id=10%3A1638&starting-point-node-id=113%3A2743 

## 🌐 Demonstração do app na web:
<img width='350' src='https://github.com/PedrohvFernandes/nlw-return-inpulse-web/blob/master/screenshot/Screen1.png'/>
<img width='350' src='https://github.com/PedrohvFernandes/nlw-return-inpulse-web/blob/master/screenshot/Screen2.png'/>
<img width='350' src='https://github.com/PedrohvFernandes/nlw-return-inpulse-web/blob/master/screenshot/screen3.png'/>
<img width='350' src='https://github.com/PedrohvFernandes/nlw-return-inpulse-web/blob/master/screenshot/screen4.png'/>
<img width='350' src='https://github.com/PedrohvFernandes/nlw-return-inpulse-web/blob/master/screenshot/screen5.png'/>


 ## Deploy
 - Deploy Web(na vercel + Railway): https://nlw-return-inpulse-web.vercel.app
 - Deploy do back-end(Railway): https://nlw-return-inpulse-web-production.up.railway.app

## ✨Tecnologias:

### Principais Stacks:
- React
- React Native
- NodeJs
- PostgreSQL(BD em produção)
- SQLite(BD em desenvolvimento)
- Prisma

### Secunderias Stacks:
- Typescript
- Tailwind CSS
- Headless UI (Componentes com acessibilidade)
- Phosphor icon
- Insomnia(Testes de rotas)
- Jest(Teste unitários)
- Expo(Ferramenta de ambiente de desenvolvimento para React-native)
- Axios(Biblioteca/API para lidar com req HTTP)

### Serviços usados:
- mailtrap.io(Envio de email em ambiente de desenvolvimento e produção) + nodemailer

## 🛠️ Features:
- Envio de 3 feedbacks: BUG, IDEIA e OUTRO
- Envio de imagem
- Envio do feedback por email 


## 🛠️ Futuras Features:
- Theme Dark/Light theme (Tailwind Light/Dark mode) ✔️
- Em produção usar algum serviço de email (Mailgun)
- Melhorar o HTML/CSS do e-mail ✔️
- Dashboard de feedbacks enviados pelo usuario
   - Autenticação(Firebse/OAuth)
   - Historico de feedbacks
- validação de campos/erros -> Mostrar no html o erro

## Executando o projeto local: 
- Va na branch master e de um git clone: https://github.com/PedrohvFernandes/nlw-return-impulse-feedback-widget/tree/master
Utilize o yarn ou o npm install para instalar as dependências do projeto. Em seguida, inicie o projeto utilizando terminal integrado para cada pasta, por exemplo: cd server e npm i para todos.
### Iniciar o Server
- <pre> npm run dev / yarn dev </pre>
- <pre> npm prisma studio / yarn prisma studio </pre>
- Se der erro ao iniciar o npm run dev, faça isso:
- Postgresql para SQLite
  - Caso esteja postgresql mude o provider para ./prisma/schema.prisma para o sqlite
  - npx prisma migrate dev > Refaça as migrações no banco de dados, pois elas salvão o tipo de banco de dados (sqlite, postgress,mongo, etc).
  - não esqueça de verificar se ne ./prisma/schema.prisma/migrations/migration_lock.toml se o provider esta igual "sqlite"
  - .env ->  DATABASE_URL='file:./dev.db'
  - Se não der certo, apague os arquivos da pasta prisma e de um npx prisma migrate dev. Obs: ao apagar voce ira apagar todos os dados armazenados no banco de dados -> dev.db
  - abra a interface do banco de dados npx prisma studio

- SQLite para Postgresql
  - Caso esteja SQLite mude o provider para ./prisma/schema.prisma para o postgresql
  - npx prisma migrate dev > Refaça as migrações no banco de dados, pois elas salvão o tipo de banco de dados (sqlite, postgress,mongo, etc).
  - não esqueça de verificar se ne ./prisma/schema.prisma/migrations/migration_lock.toml se o provider esta igual "postgresql"
  - .env ->   DATABASE_URL='postgresql://postgres:CHAVE_DO_SERVIÇO_QUE_VOCÊ_ESTA_USANDO@containers-us-west-45.railway.app:6258/railway'
  - Se não der certo, apague os arquivos da pasta prisma e de um npx prisma migrate dev. Obs: ao apagar voce ira apagar todos os dados armazenados no banco de dados
  - A interface do banco de dados fica a onde você esta usando o banco de dados, ou seja o serviço que você esta usando para usar o banco de dados em nuvem
### web
- <pre> npm run dev /  yarn dev </pre>

### expo go(no celular) mobile
- <pre> expo start </pre>
- Mudar o baseURL no src/lib/api para seu 'http://ipv4:3333'
- Acesse pelo aplicativo Expo Go


## Para fazer o envio de email tanto local quanto para produção:
- Crie uma conta no mailtrap com o email certo
- Va na pasta server>src>adapters>nodemailer>nodemailer-mail-adapter.ts
- <pre> cria a conta>paineltesting>inboxes>add inbox>name -> NLW Return>abre o inbox e pronto varios tipos de integraçao>nesse caso estamos usando o nodemailer></pre>

<pre> e so copiar a config e coisar no server :) 
 var transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "SEU CODIGO",
     pass: "SEU CODIGO"
   }
 });
</pre>

- Depois to: "Pedro Henrique Vieira Fernandes <pedrohv20fernandes@gmail.com>", -> mude esse email para o email cadastrado

### Criar Variables de ambiente
<pre>
 Web -> Usa essa chave em na branch de produçao src/libs/api.ts
 caminho do env -> web/
 .env.local:
 VITE_API_URL=http://localhost:3333

 Server
 caminho do env -> server/prisma/
 .env -> Usa essa chave em na branch de produçao e desenvolvimento prisma/schema.prisma/ env("DATABASE_URL")
 
 sqlite:
 DATABASE_URL='file:./dev.db'

 PostgreSQL:
 DATABASE_URL='postgresql://postgres:CHAVE_DO_SERVIÇO_QUE_VOCÊ_ESTA_USANDO@containers-us-west-45.railway.app:6258/railway'
</pre>

## Executando o projeto produção: 
- so dar um git clone https://github.com/PedrohvFernandes/nlw-return-impulse-feedback-widget/tree/producao e seguir os passos da pasta curiosidades/Em Produção 


## 👨‍💻 Autor:
- Linkedin: https://www.linkedin.com/in/pedro-henrique-vieira-fernandes
- Git: https://github.com/PedrohvFernandes
- Instagram: pedro17fernandes
- portfolio: PedrohvFernandes.github.io
