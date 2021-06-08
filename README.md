# TP-Final-TP2

<!-- -Descripción
	
    El objetivo principal será conectar dos usuarios para chatear en tiempo real entre sí de acuerdo al idioma elegido por los mismos. La aplicación tendrá un sistema de registro y login, con autenticación y autorización correspondientes. Podrá ser opcional ingresar a la misma a través de una API de Google y dichos datos serán persistidos en nuestra base de datos.
    
1. Listado Funcionalidades
    -Login y sign up de usuarios
    -Autenticación usuario
    -Operaciones CRUD usuario  
    -Autorización usuario
    -Interaccion con base de datos Mongo
    -Listar amigos 
    -Persistencia del usuario a través de la API de Google


2. Listado de actores/roles
	-Usuario

3. Listado de las entidades principales
    -Usuarios
    -Idiomas
    -Amigos
    
4. Instrucciones técnicas:

    4.1 Para la instalación de un entorno de desarrollo:

    - Editor de texto - Recomendado: Visual Studio Code
    - Node js -versión 14.15.3
    - npm install express-generator -g
    - En la consola ejecutar:

        express -e --git <nombre_proyecto>

    - Hacer npm install: Chequear en el archivo package.json tener los siguientes paquetes:

        "bcryptjs": "^2.4.3", → para hashear contraseñas

        "cookie-parser": "~1.4.4", → para configurar cookies

        "cors": "^2.8.5", → para habilitar CORS desde todos los origenes

        "debug": "~2.6.9", → para habilitar o desahabilitar mensajes en consola

        "dotenv": "^10.0.0", → para crear variables de entorno en el proyecto local

        "ejs": "~2.6.1", → permite procesar páginas HTML cuya extensión sea .ejs

        "express": "~4.16.1", → para configurar el servidor/API

        "http-errors": "~1.6.3", → crea errores HTTP para Express

        "jsonwebtoken": "^8.5.1", → para generar el token del usuario

        "mongodb": "^3.6.9", → para conectarnos a la base de datos MongoDB

        "morgan": "~1.9.1" → Middleware del registrador de solicitudes HTTP para node.js

    4.2 Para la ejecución:

    - Configurar Cluster en MongoDB ->

        - Conectarse a él usando la opción 2 (MongoDB's native drivers) versión 2.2.12 or later

    - npm start → para levantar el servidor
	