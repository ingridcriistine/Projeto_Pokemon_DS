import express from 'express';
import initRoutes from './routes/routes.js'
import cors from 'cors'

const app = express();
const port = 8080;
app.use(cors({
    origin: '*'
}))
initRoutes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));



app.use(
    cors({
        origin: "http://localhost:3000", // Permite apenas requisições desta origem
        methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
        allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
    })
);