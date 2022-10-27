import express from 'express';
//import registrosPacRoutes from './routes/registros_pac.routes.js'
import registrosMedRoutes from './routes/registros_med.routes.js'
import Usuario from './routes/Usuario.js'
import Cita from './routes/Cita.js'
import Consulta from './routes/Consulta.js'
import Medicamento from './routes/Medicamento.js'
//import registrosAtencionRoutes from './routes/registros_atencion.routes.js'
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());

//app.use(registrosPacRoutes)
app.use(Usuario)
app.use(Cita)
app.use(Consulta)
app.use(Medicamento)

//app.use(registrosAtencionRoutes)

export default app;
