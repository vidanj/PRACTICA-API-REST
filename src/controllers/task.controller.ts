import { Request, Response } from "express"; //Request y Response: Son tipos importados de Express que se usan para manejar las solicitudes y respuestas HTTP, respectivamente.
import { TaskService } from "../services/task.service";

//Se agregaron los tipos : void en ambas funciones para que coincidan con lo que Express espera.
//Express espera que la función retorne void o Promise<void>

//objeto TaskController
export const TaskController = {
    //Este método maneja las solicitudes GET para obtener todas las tareas.
    getTasks: (req: Request, res: Response): void => {
        //res.json(): Devuelve las tareas en formato JSON como respuesta. El código de estado por defecto es 200 OK, lo que indica que la solicitud fue exitosa.
        res.json(TaskService.getAll()); //
    },

    //Este método maneja las solicitudes POST para crear una nueva tarea.
    //El código en TaskController.createTask extrae title y genera los otros valores (id y completed):
    createTask: (req: Request, res: Response ): void => {
        //Extrae el title del cuerpo de la solicitud (req.body), que es lo que el cliente envía al servidor. El body contiene los datos de la tarea que el cliente desea crear.
        const {title} = req.body;

        
        if (!title) {
            res.status(400).json({error: 'Title is required'});//400 (Bad Request)
            return; // Asegura que la función termine aquí
        }

        const newTask = TaskService.create({id: Date.now(), title, completed: false}); //las interfaces solo se utilizan para definir la estructura de un objeto, pero no generan instancias

        //201 Created, lo que indica que el recurso se creó correctamente en el servidor.
        res.status(201).json(newTask); 
    }
};