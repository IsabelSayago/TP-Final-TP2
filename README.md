# Hello

**Heroku**
[Hello](https://apichathello.herokuapp.com/) 

## *Descripción*
	
El objetivo principal será conectar dos usuarios para chatear en tiempo real entre sí de acuerdo al idioma elegido por los mismos. La aplicación tendrá un sistema de registro y login, con autenticación y autorización correspondientes. Podrá ser opcional ingresar a la misma a través de una API de Google y dichos datos serán persistidos en nuestra base de datos.
    
## *Listado Funcionalidades*
    - Login y sign up de usuarios
    - Autenticación usuario
    - Operaciones CRUD usuario  
    - Autorización usuario
    - Interaccion con base de datos Mongo
    - Listar amigos 
    - Persistencia del usuario a través de la API de Google


## *Listado de actores/roles*
	- Usuario

## *Listado de las entidades principales*
    - Usuarios
    - Idiomas
    - Amigos
    
## *Instrucciones técnicas:*
**Para la instalación de un entorno de desarrollo:**

1. Editor de texto - Recomendado: Visual Studio Code
2. Node js -versión 14.15.3
3. En la consola ejecutar:
```bash
    npm install express-generator -g
```

```bash
    express -e --git <nombre_proyecto>
```

    
4. Chequear tener los siguientes paquetes. Primero ejecutar:

```bash
    npm install 
```

- "bcryptjs": "^2.4.3", → para hashear contraseñas

- "cookie-parser": "~1.4.4", → para configurar cookies

- "cors": "^2.8.5", → para habilitar CORS middleware

- "debug": "~2.6.9", → para habilitar o desahabilitar mensajes en consola

- "dotenv": "^10.0.0", → para crear variables de entorno en el proyecto local

- "ejs": "~2.6.1", → permite procesar páginas HTML cuya extensión sea .ejs

- "express": "~4.16.1", → para configurar el servidor/API

- "http-errors": "~1.6.3", → crea errores HTTP para Express

- "jsonwebtoken": "^8.5.1", → para generar el token del usuario

- "mongodb": "^3.6.9", → para conectarnos a la base de datos MongoDB

- "morgan": "~1.9.1" → Middleware del registrador de solicitudes HTTP para node.js

**Para la ejecución:**

1. Configurar Cluster en MongoDB ->

> Conectarse a él usando la opción 2 (MongoDB's native drivers) versión 2.2.12 or later

2. Para levantar el servidor:

```bash
    npm start
```
    
	