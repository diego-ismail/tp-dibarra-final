Documentación:
El programa sirve para guardar platos de comida y verlos.
Luego tiene una ruta /nutricion donde consulta una api externa y nos devuelve una lista de platos e info nutricional

Configuracion:
Renombrar el archivo .env.example a .env

Inicio del servidor:
Ejecutar: npm run start
LLAMADA a API Externa:
Para ver un alimento en particular:
    usar el método GET http://localhost:3000/nutricion/ver/banana (siendo banana el parámetro a buscar)
    *Aclaración, la libreria externa está en ingles, con lo cual los alimentos deben ingresarse en ingles (apple, carrot, pineapple, cookie)

LLAMADAS A LAS API's:
Para crear un plato:
    usar el metodo post http://localhost:3000/platos/crear
    con un json con estos campos: (el precioConDcto tiene que ser menor o igual al precio, caso contrario muestra error)
        {
        "plato":"nombreDelplato",
        "descripcion": "Texto libre con detalle del plato",
        "precio":"25",
        "precioConDcto" : "20",
        "aptoCeliaco" : "true",
        "aptoVegano" : "false"
        }
Para ver la lista de todos los platos:
    usar el método GET http://localhost:3000/platos/vertodos

Para ver un plato en particular:
    usar el método GET http://localhost:3000/platos/ver/63f2adab49a77ffe20742145 (siendo 63f2adab49a77ffe20742145 el id de un plato ya existente)

Para modificar un plato en particular:
    usar el método PUT http://localhost:3000/platos/editar/63f2adab49a77ffe20742145 (siendo 63f2adab49a77ffe20742145 el id de un plato ya existente)
    con un json son estos campos:
        {
        "plato":"nombreDelplato",
        "descripcion": "Texto libre con detalle del plato",
        "precio":"25",
        "precioConDcto" : "20",
        "aptoCeliaco" : "true",
        "aptoVegano" : "false"
        }
Para borrar un plato
    usar el metodo DELETE http://localhost:3000/platos/eliminar/63f2adab49a77ffe20742145 (siendo 63f2adab49a77ffe20742145 el id de un plato ya existente)
