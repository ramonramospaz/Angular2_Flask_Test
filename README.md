
# Test application with Angular 2 for frontend and flask + python for backend.

# pre-installation requirements

It is necessary to have Node 6 installed on your machine, since the frontend has not been uploaded to a server.
The backend is hosted on the route https://ramonramospaz.pythonanywhere.com/. The test user 'test' and the password is 123456. The route with the source code can be found at https://github.com/ramonramospaz/Angular2_Flask_Test.

# Installation instructions.

First clone or download as a Zip using the "Clone Or Download" button located at the top right of the web page.

Now on the command line, positioned in the main folder, the following routine is executed:

    npm install
    
# Booting the test server

To start the test server, the following statement is executed.

npm start

When you run the command, show the following by console.

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

# Development detail

The are 2 sections, the frontend developed in angular 2 and the backend in python with flask and using MySql as a database.

The backend is in the 'backend' folder specifically in the file flask_app.py. This web service contains the following functions:
* Authenticate: Authenticates the user and returns the token for access.
* List: It shows the activities carried out by the user.
* Add: Allows adding new activities
* Delete: Delete the selected activity.

To access each function you must go to the path https://ramonramospaz.pythonanywhere.com/{{function}} where function is changed by the list shown above.

The files of the frontEnd are: index.html, common.css, package.json, Readme.md, systemjs.config.js, tsconfig.json and the app folder. 
It contains the following components in typescript:
* Main.ts: it is the main file, where the routes are defined and the modules to be used in the application are included.
* Login.component.ts: contains the code of the access page of the application.
* Activities.component.ts: contains the code of the main (and only) page of the application where the activities are listed, added and deleted.
* Router-config.ts: contains the routes created for the application.

The database ramonramospaz $ test1 have 2 tables:
Markup:
* User: contains the users who must have access to the application. The token is also stored there.
* Activities: contains the list of activities for each user.




