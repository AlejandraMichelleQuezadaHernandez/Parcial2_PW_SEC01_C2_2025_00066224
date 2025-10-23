import express from 'express';
import cors from 'cors';
import cuentasRutas from './routes/cuentasRutas.js';

const app = express();


const PORT = 3130;

app.use(cors());
app.use(express.json());


app.use('/', cuentasRutas);


app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});