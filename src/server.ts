import express from 'express';
import { router } from './routes';

const app = express();
const port = 5000;

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});
