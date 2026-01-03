import app from "./app.js";


const PORTA = 3000

//Fazer conecxão

app.listen(PORTA, ()=>{
    console.log(`Executando o Servidor no endereço http://localhost:${PORTA}`)
});


