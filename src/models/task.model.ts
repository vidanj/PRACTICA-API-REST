//Una interfaz en TypeScript es una estructura que define las propiedades y tipos de datos que debe tener un objeto
//El uso de una interfaz ayuda a asegurar que cualquier objeto que sea tratado como un Task tenga estas tres propiedades con los tipos adecuados.
export interface Task{
    id: number;
    title: string;
    completed: boolean;
}