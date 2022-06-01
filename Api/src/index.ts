import express from 'express';
import cors from 'cors';
import path from 'path'

import Cardapio from './routes/cardapio.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname,'.','data','assets')));

let port = 3333;

app.use('/', Cardapio);

app.listen(port, ()=>{
    let cData = new Date()
    let data = `${cData.getDate()}/${cData.getMonth() + 1}/${cData.getFullYear()} ${cData.getHours()}:${cData.getMinutes()}:${cData.getSeconds()}`;
    console.log(`${data} Servidor rodando na porta ${port} :)`)
});