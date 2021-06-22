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
    - Persistencia del usuario a través de la API de Google


## *Listado de actores/roles*
	- Usuario

## *Listado de las entidades principales*
   	- Usuarios
    	- Idiomas
   	 - Amigos
    
## *Instrucciones técnicas:*
1. Pedir el archivo .env o preguntar las variables de entorno.
2. Editor de texto - Recomendado: Visual Studio Code
3. Node js -versión 14.15.3
4. En la consola ejecutar:

```
    npm install 
```

```bash
    npm start
```
## *Listado de Endpoints*

RutaAPI: https://apichathello.herokuapp.com/

1. GET
- RutaAPI/ -> Página principal
- RutaAPI/users/ -> Devuelve todos los usuarios
- RutaAPI/users/:id -> Devuelve un usuario por id

2. POST
- RutaAPI/login -> Login de usuarios
- RutaAPI/signup -> Registro de usuarios

3. PUT
- RutaAPI/users/:id -> Actualiza los datos de un usuario por id
	
