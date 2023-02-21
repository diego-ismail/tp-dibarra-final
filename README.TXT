Documentación:
El programa sirve para guardar usuarios y verlos.

Configuracion:
Renombrar el archivo .env.example a .env

Inicio del servidor:
Ejecutar: npm run dev

LLAMADAS A LAS API's:
Para crear un usuario:
    usar el metodo post http://localhost:3000/usuarios/crear
    con un json con estos campos:
        {
        "nombre":"nombreDelUsuario",
        "email": "usuario@dominio.com",
        "password":"hash",
        "sexo" : "M"|"F"
        }
Para ver la lista de todos los usuarios:
    usar el método GET http://localhost:3000/usuarios/vertodos

Para ver un usuario en particular:
    usar el método GET http://localhost:3000/usuarios/ver/63f2adab49a77ffe20742145 (siendo 63f2adab49a77ffe20742145 el id de un usuario ya existente)

Para ver un usuario en particular:
    usar el método PUT http://localhost:3000/usuarios/editar/63f2adab49a77ffe20742145 (siendo 63f2adab49a77ffe20742145 el id de un usuario ya existente)
    con un json son estos campos:
        {
        "nombre":"nombreDelUsuario_cambiado",
        "email": "usuario@dominio.com",
        "password":"hash",
        "sexo" : "M"|"F"
        }
Para borrar un usuario
    usar el metodo DELETE http://localhost:3000/usuarios/eliminar/63f2adab49a77ffe20742145 (siendo 63f2adab49a77ffe20742145 el id de un usuario ya existente)
