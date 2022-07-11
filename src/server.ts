import 'reflect-metadata'
import express from 'express';
import { router } from './routes';
import './container'
import cors from 'cors'

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});
