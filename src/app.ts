import express from "express";  //módulo de Express, que es un framework para construir aplicaciones web en Node.js.
import helmet from "helmet"; //helmet, que ayuda a proteger tu aplicación Express estableciendo varios encabezados HTTP relacionados con la seguridad.
import cors from 'cors'; //cors, que permite habilitar el intercambio de recursos entre dominios (CORS). Esto es útil cuando el cliente y el servidor están en dominios diferentes.
import taskRoutes from './routes/task.routes';

//Crea una instancia de una aplicación Express.
const app = express();

app.use(cors()); //API podrá recibir solicitudes de clientes que estén en dominios diferentes al de tu servidor. 
app.use(helmet()); //añade varios encabezados HTTP de seguridad a tu aplicación, ayudando a protegerla contra amenazas comunes, como ataques de Cross-Site Scripting (XSS) o Clickjacking.

//Habilita el procesamiento de cuerpos de solicitudes JSON. Cuando un hace una solicitud POST o PUT con un cuerpo JSON, este  lo convierte en un objeto JavaScript accesible en req.body.
app.use(express.json());

//Registra las rutas que están definidas en taskRoutes bajo el prefijo /tasks
//Si taskRoutes tiene una ruta GET /, se podrá acceder en http://localhost:3000/tasks.
//Si taskRoutes tiene una ruta POST /, se podrá acceder en http://localhost:3000/tasks.
app.use('/tasks',taskRoutes);

export default app; //xporta la instancia de la aplicación Express para que pueda ser utilizada en otros archivos,