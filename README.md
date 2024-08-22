Hola! Sean bienvenidos a probar mi página web la cual se trata sobre el funcionamiento o simulación de lo que seria una página web realizada con un Servidor de MongoDB para poder alamcenar todos los datos que estemos ingresando, ademas de las implementaciones de Vite y React para la estructuración y diseño de la página.

Antes de todo, que usamos para poder realizar esta página?
Principalmente los siguientes elementos:

React: Es una biblioteca de JavaScript utilizada para crear interfaces de usuario (UI) para aplicaciones de una sola página. Permite reutilizar componentes desarrollados en otras aplicaciones y es ampliamente utilizado en el desarrollo de aplicaciones web y móviles.

Vite: Vite es una herramienta de construcción y desarrollo frontend. Su objetivo es hacer que el proceso de desarrollo sea más rápido y eficiente, especialmente para proyectos Vue.js. Vite se enfoca en proporcionar tiempos de carga y recarga ultrarrápidos durante el desarrollo. Divide los módulos de una aplicación en dos categorías: dependencias y código fuente, mejorando el tiempo de inicio del servidor de desarrollo. Puede utilizarse para crear proyectos más rápido en React, Vue, Svelte, Preact, Vanilla JavaScript, etc.

Tailwind CSS: Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS, Tailwind CSS es una potente herramienta para el desarrollo frontend.

MongoDB: Es una base de datos NoSQL orientada a documentos que apareció a mediados de la década de 2000. Se utiliza para almacenar volúmenes masivos de datos. A diferencia de una base de datos relacional SQL tradicional, MongoDB no se basa en tablas y columnas. Los datos se almacenan como colecciones y documentos.

JavaScript: Lenguaje de Programación principalmente usado para realizar las funciones de la página.

HTML: Hace referencia al lenguaje de marcado utilizado en la creación de páginas web. Este estándar que sirve de referencia del software que interactúa con la elaboración de páginas web en sus diferentes versiones.

CSS: Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.

Node.js: Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono.

Nodemon: Es una herramienta que nos ayuda a reiniciar nuestro servidor (o algún otro proceso de nuestra computadora) cada vez que hagamos un cambio en nuestro código.

Ahora bien, una vez que entendamos los complementos y utencilios usados, veamos como se instala nuestro codigo para tu navegador web de preferencia:

1. Como primer paso es tener instalado los elementos que estaran presentes dentro del siguiente enlace de youtube: https://youtu.be/iRSiC5oZ_4k

2. Una vez instalado todo lo que vendria a ser, Node.js y MongoDB "https://www.mongodb.com/try/download/community", ya viene siendo hora de ir abriendo las terminales de ambas carpetas.

3. Dentro de la terminal de la carpeta de backend iniciaremos nuestro servidor para poder realizar las peticiones que se muestran en el video, para ello primero deberemos de instalar las dependencias con el siguiente comando " npm instal" o en su defecto si queremos que se guarde cada cambio en tiempo real " npx nodemon".

4. Despues de ingresar cualquiera de estos comandos, solo bastará correr el servidor backend con " npm start " y asi daremos paso a realizar esta misma operacion en la carpeta de OnlineStore.

5. Abriendo el terminal dentro de esta carpeta, primero instalaremos las dependencias con el npm install.

6. Para luego iniciar el servidor en este caso con el comando " npm run dev" y nos aparecera que el código se ha conectado correctamente, dandonos un link para que podamos finalmente entrar a la página.

CONSEJO:
Debes tener instalado el MongoDB que deje en este Readme, asi no te dara fallas al tratar de conectarlo, simplemente instalalo como cualquier aplicación, tenlo abierto y prueba el código con toda confianza.

¿Qué Funciones tiene la página?

Principalmente las funciones que se dejaron en la descripción, siendo las siguientes:

Página de inicio: Al cargar la aplicación, se mostrará una lista productos disponibles en el inventario de la tienda. Cada producto deberá mostrar su nombre, descripción, precio, cantidad disponible e imagen representativa.
Crear Producto: Se debe proporcionar un formulario para crear una nuevo producto. El formulario deberá contener campos para ingresar el nombre, descripción, precio, cantidad inicial, imagen y categoría. Al enviar el formulario, se deberá guardar en el backend y mostrarla en la lista.

Actualizar: Cada producto en la lista deberá tener la opción de ser editada. Al hacer clic en el producto, se mostrará un formulario similar al de creación, pero con los campos prellenados con la información del producto seleccionada. Se deberá permitir modificar los campos de nombre, descripción, precio, cantidad, imagen, categoría e ingredientes relacionados. Al enviar el formulario de actualización, se deberán guardar los cambios en el backend y reflejarlos en la lista.

Eliminar: Cada producto en la lista deberá tener la opción de ser eliminada. Al hacer clic en la opción de eliminación, se mostrará una confirmación y, en caso de aceptarla, se eliminará tanto del backend como de la lista.

Búsqueda: Se deberá proporcionar un campo de búsqueda en la página de inicio, donde los usuarios puedan buscar el producto por su nombre, descripción o categoría. Al realizar la búsqueda, se deberán mostrar solo las que coincidan con los términos ingresados.

Listado: Se deberá proporcionar una sección en la página de inicio donde se muestre un listado disponibles en la tienda. Cada producto deberá mostrar su nombre, cantidad disponible y una descripción breve.

Ademas te adjunto la maquetación en Figma, por si quieres ver la paleta de colores que use:

https://www.figma.com/design/0AQkWHclvrre6uX2O7C0aQ/Online-Store?node-id=0-1&t=bBZk06pPFYCXQH3Y-0

Espero que esta información te sea útil al momento de correr el código, Saludos!
