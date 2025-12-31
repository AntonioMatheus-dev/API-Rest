import express from  'express'
import selecaoController from './app/controllers/selecaoController.js';


const app = express();
app.use(express.json()); 

//ROTAS
app.post('/selecoes', selecaoController.store);
app.get('/selecoes', selecaoController.index);
app.get('/selecoes/:id', selecaoController.show);
app.put('/selecoes/:id', selecaoController.upadate);
app.delete('/selecoes/:id', selecaoController.delete);

export default app;