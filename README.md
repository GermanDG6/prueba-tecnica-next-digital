## Detalles

Un cliente del sector de la comunicación nos ha pedido desarrollar una aplicación web, un prototipo de una red social. Nos han compartido APIs (backend) para la consulta de los datos, así que únicamente deberás implementar un proyecto front. Para que desarrollemos una primera versión funcional, desde el negocio nos han pasado las siguientes especificaciones:

Como cliente querría una red social que implementara las siguientes funcionalidades:

# Vista con listado de usuarios

API: https://jsonplaceholder.typicode.com/users/

# Vista con detalle de usuario (ej: https://jsonplaceholder.typicode.com/users/1)

-Nombre
-User
-Email
-Ciudad
-Website
-Nombre de la empresa donde trabaja
-Listado de álbumes (mostrar miniatura de la primera foto en los detalles del usuario) https://jsonplaceholder.typicode.com/users/1/albums
-Dentro del album estará el listado de fotos (asociado al álbum) https://jsonplaceholder.typicode.com/photos
-Listado de TODOs asociados al usuario
-Mostrar elementos ya existentes para el usuario
API: https://jsonplaceholder.typicode.com/todos/

# ➡️ Modificar TODOs

-Añadir elementos
-Validando que los elementos de la lista no contengan números, solamente texto.
-Borrar elementos
-Buscador de TODOs, filtrar por el texto y que sea reactivo.
-El cliente quiere también que la página inicial muestre un listado de los álbumes recién visitados, por ejemplo:
-Recién visitados: Álbum 1 “quidem molestiae enim” Álbum 5 “eaque aut omnis a” …
Esta información de recién visitados queremos que persista entre sesiones, es decir: si pulso F5 quiero que se siga mostrando la información.
-Consideraciones adicionales
Por otra parte, desde el departamento técnico de la empresa nos han pasado algunos criterios sobre cómo esperan que la solución sea implementada:

-Es obligatorio usar Git y hacerlo bien (metodología Git Flow, commits frecuentes y relevantes, etc.) porque quieren ir echándole un vistazo al código de vez en cuando. Parece que van a estar pendientes, así que tómatelo como una prioridad.
Debemos hacer tests tanto unitarios como de integración.
Han mostrado interés en la integración y el despliegue continuos. Si usamos Gitlab CI, Github Actions o Jenkins para que la aplicación pase los tests, se construya y se despliegue lo verían con buenos ojos.
También han mostrado interés en Docker. Estaría bien que despleguemos mediante contenedores.
