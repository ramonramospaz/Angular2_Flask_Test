# Aplicación de prueba con Angular 2 para frontend y flask+python para backend.

# pre-requisitos de instalación

Es necesario tener instalado Node 6 en tu máquina, ya que el frontend no lo he subido a un servidor. 
El backend se encuentra hospedado en la ruta https://ramonramospaz.pythonanywhere.com/. El usuario de prueba 'test' y la clave es 123456. La ruta con el código fuente se encuentra en https://github.com/ramonramospaz/Angular2_Flask_Test.

# Instrucciones para instalación.

Primero clone o descargue como un Zip usando el botón "Clone Or Download" que se encuentra en la parte superior derecha de la página web.

Ahora en la línea de comando, posicionado en la carpeta principal se ejecuta la siguiente rutina:

    npm install
    
# Arrancando el servidor de prueba

Para arrancar el servidor de prueba se ejecuta la siguiente sentencia.

	npm start

Cuando ejecute el comando mostrar lo siguiente por consola.

```
** browser-sync config **
{ injectChanges: false,
  files: [ './**/*.{html,htm,css,js}' ],
  watchOptions: { ignored: 'node_modules' },
  server: { baseDir: './', middleware: [ [Function], [Function] ] } }
[BS] Access URLs:
 -----------------------------------
       Local: http://localhost:3000
    External: http://10.0.13.70:3000
 -----------------------------------
          UI: http://localhost:3001
 UI External: http://10.0.13.70:3001
 -----------------------------------
```

#Detalle del desarrollo

El desarrollo está compuesto de 2 secciones, el frontend desarrollado en angular 2 y el backend en python con flask y utilizando MySql como base de datos.

El backend se encuentra en la carpeta ‘backend’ específicamente en el archivo flask_app.py. Este servicio web contiene las siguientes funciones:
1) Autenticar: Autentica al usuario y devuelve el token para el acceso.
2) Listar: Muesta las actividades realizadas por el usuario.
3) Agregar: Permite adicionar las nuevas actividades
4) Eliminar: Elimina la actividad seleccionada.

Para acceder a cada función se debe ir a la ruta https://ramonramospaz.pythonanywhere.com/{{funcion}} donde función se cambia por la lista mostrada anteriormente.

El frontend está conformado por los archivos: index.html, common.css, package.json, Readme.md, systemjs.config.js, tsconfig.json y la carpeta app. Esta contiene los siguientes componentes en typescript:
1. main.ts: es el archivo principal, donde se definen las rutas y se incluyen los módulos a utilizar en la aplicación.
2. login.component.ts: contiene el código de la página de acceso de la aplicación.
3. activities.component.ts: contiene el código de la página principal (y única) de la aplicación donde se listan, se agregan y eliminan las actividades.
4. router-config.ts: contiene las rutas creadas para la aplicación.

La base de datos ramonramospaz$test1 se encuentra conformada por 2 tablas:
1.	Usuario: contiene los usuarios que deben tener acceso a la aplicación. Allí también se almacena el token.
2.	Actividades: contiene la lista de actividades de cada usuario.





