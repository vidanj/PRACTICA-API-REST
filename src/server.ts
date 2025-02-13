import app from './app';

//dotenv, que permite cargar variables de entorno desde un archivo .env en el proyecto.
//Este módulo permite manejar configuraciones sensibles (como claves de API, credenciales de bases de datos, etc.) sin tener que hardcodearlas en el código.
import dotenv from 'dotenv'; 

//Esta línea carga las variables de entorno definidas en el archivo .env y las pone a disposición de tu aplicación a través del objeto process.env. 
//Si tienes un archivo .env en el proyecto, dotenv.config() leerá ese archivo y lo procesará.
dotenv.config();

//Aquí se define el puerto en el que el servidor escuchará. Se intenta obtener el valor de la variable de entorno PORT. Si no está definida en el archivo .env, 
//entonces se usará el valor por defecto 3000
const PORT = process.env.PORT || 3000;

//Esta línea le dice a Express que empiece a escuchar las solicitudes en el puerto especificado por la variable PORT.
app.listen(PORT, () => {
    console.log('Server runing in port ${PORT}');
}); 