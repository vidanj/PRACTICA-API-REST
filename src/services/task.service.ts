import { Task } from "../models/task.model";

const tasks: Task[] = []; //arreglo vacío 

//Objeto TaskService
export const TaskService = {
    getAll: () => tasks, //getAll Este método no recibe ningún parámetro y simplemente retorna el arreglo tasks, es decir, todas las tareas que han sido creadas.

    create: (task: Task) => { //create Este método recibe un objeto task de tipo Task como parámetro.
        tasks.push(task);
        return task;
    }
}