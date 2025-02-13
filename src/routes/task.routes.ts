import { Router } from "express"; //Permite definir rutas en Express.
import { TaskController } from "../controllers/task.controller";
import { body } from "express-validator"; //Se usa para validar el body de las solicitudes POST.

//Objeto router
const router = Router();

// Ruta GET para obtener todas las tareas
//Cuando un cliente hace una solicitud GET a /tasks, se ejecuta TaskController.getTasks, que devuelve todas las tareas en formato JSON.
//Example: GET http://localhost:3000/tasks
router.get('/', TaskController.getTasks);

// Ruta POST para crear una nueva tarea, con validación de 'title'
router.post(
    '/', //Define la ruta POST /tasks.
    [body('title').notEmpty().withMessage('Title is Required')], //Verifica que el campo title no esté vacío. Si title está vacío, devuelve un error con el mensaje "Title is Required".
    TaskController.createTask // Llama al controlador que crea una nueva tarea.
);

export default router; // Exporta el router para usarlo en la aplicación principal