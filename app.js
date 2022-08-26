import express from 'express';
//import registrosPacRoutes from './routes/registros_pac.routes.js'
import registrosMedRoutes from './routes/registros_med.routes.js'
//import registrosAtencionRoutes from './routes/registros_atencion.routes.js'
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());

//app.use(registrosPacRoutes)
app.use(registrosMedRoutes)
//app.use(registrosAtencionRoutes)

export default app;
