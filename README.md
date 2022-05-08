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
- Theme Dark/Light theme (Tailwind Light/Dark mode)
- Em produção usar algum serviço de email (Mailgun)
- Melhorar o HTML/CSS do e-mail
- Dashboard de feedbacks enviados pelo usuario
   - Autenticação(Firebse/OAuth)
   - Historico de feedbacks
- validação de campos/erros  

## Executando o projeto
Utilize o yarn ou o npm install para instalar as dependências do projeto. Em seguida, inicie o projeto utilizando terminal integrado para cada pasta.
### Server
<pre> npm run dev </pre>
### web
<pre> npm run dev </pre>
### expo go(no celular) mobile
<pre> expo start </pre>

### Variables de ambiente
<pre>
 Web
 .env.local:
 VITE_API_URL=http://localhost:3333

 Server
 .env
 DATABASE_URL=
</pre>


## 👨‍💻 Autor:
- Linkedin: https://www.linkedin.com/in/pedro-henrique-vieira-fernandes
- Git: https://github.com/PedrohvFernandes
- Instagram: pedro17fernandes
- portfolio: PedrohvFernandes.github.io
