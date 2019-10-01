# nodeExpressApp

Buen dia

para correr el proyecto se debe tener instalado mongodb en el pc ya que lo he hecho local.

una vez clonado el proyecto dar el comando "npm run dev" que iniciara en el puerto 3000 una vez corra la consola inficara que la conecciona la bd 
esta lista y ya esta corriendo.

despues ingresar a la carperta front-end y primero instalar las dependencias de angular con "npm i" al finalizar este comando, el proyecto se 
corre con "ng serve"

Estado de la prueba, aunque primero hice de prueba un crud con modificacion de usuarios, se puede comprobar en los primeros commit.
la autenticacion con JWT (que lo he manejado poco pero decidi investigar e implementarlo) pero no me ha resultado del todo bien y me ha fallado 
en el login pero su resgistro funciona correctamente y no deja entrar a la pagina principal si no esta logueado.

rutas del proyecto:
-http://localhost:3000/api/users esta trae todo los usuarios es un GET
-http://localhost:3000/api/users esta crea un usuario es un POST
-http://localhost:3000/api/users/:id esta tare un usuaroo en especifico es un GET
-http://localhost:3000/api/users/:id esta actualiza un usuario es un PUT
-http://localhost:3000/api/users/:id esta elimina un usuairo es un DELETE

lo mismo es para los post:
-http://localhost:3000/api/posts esta es un GET
-http://localhost:3000/api/posts esta es un POST crea un nuevo
-http://localhost:3000/api/posts/:id esta es un GET tra un post especifico
-http://localhost:3000/api/posts/:id esta es un PUT actualiza
-http://localhost:3000/api/posts/:id esta es un DELETE borra un post

login:
-http://localhost:3000/api/resgiter este es para el regsitro y es un POST
-http://localhost:3000/api/login es un POST 

estas rutas una vez corriendo la api funcionan correctamente desde Postman o aplicaciones similares para ahcer post a una api.

He trabajado el back-end con node js y express pero mi fuerte es mas el front-end ya que en este aplique cosas como lazyLoad para una mejor carga aunque en
una aplicaicon como esta no es necesario por lo pequeña.

por falta de tiempo la prueba la pude empezar el domingo y estos 2 dias he estado trbajando por prestacion de servicios para un proyecto entonces no pude dedicarme de lleno
lleno a la prueba.

asi que falto terminar varias cosas para la creacion de posts y algunas verificaciones y la autenticacion con JWT.

la publicacion no alcance por tiempo pero si mientras se hace revision se es posible por favor confirmarme a mi correo josephrojas21@hotmail.com.
