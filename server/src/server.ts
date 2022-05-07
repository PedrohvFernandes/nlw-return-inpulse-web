import express from "express";

import cors from 'cors';

import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Railway 
// Em vez da 3333, eu quero usar a variavel ambiente PORT e se ela não existir quero usar a porta 3333
app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
