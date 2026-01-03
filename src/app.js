import express from  'express'
import SelecaoController from './app/controllers/SelecaoController.js';


const app = express();
app.use(express.json()); 

//ROTAS
app.post('/selecoes', SelecaoController.store);
app.get('/selecoes', SelecaoController.index);
app.get('/selecoes/:id', SelecaoController.show);
app.put('/selecoes/:id', SelecaoController.upadate);
app.delete('/selecoes/:id', SelecaoController.delete);

export default app;