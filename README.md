Facilitinder
============
###### by César Antón Dorantes <a href="https://twitter.com/reicek">@reicek</a>

This web platform it's aimed to help Startup Weekend match facilitators and events. You can use it at it's [Home page](https://facilitinder.firebaseapp.com/).

This proyect it's fully open source under [MIT Licence](LICENSE), anyone it's welcome to collaborate or make it's own version of it.

Facilitinder comes pre-built with the latest stable version, if you wish to test it locally simply follow the steps described at the Initialize and Run Local Server sections.

Initialize:
-----------

This application requires at least NodeJS (and NPM) installed in your computer, you can download it's most recent version at [NodeJS's official homepage](https://nodejs.org/). Once you have NodeJS installed, download this repository and run the following command from the root folder:


```
npm install
```

This will install all backend dependencies via NPM and all frontend dependencies via bower.

Run Local Server:
-----------------

To start the server run the following command from the root folder:

```
npm start
```

This will launch your local server on port 8080. To see it open your browser and visit [localhost:8080](http://localhost:8080).

Editing the Source Code
-----------------------
###### (Re)Building files
-------------------------

If you wish to *make changes* to the source files you will need to *test and concatenate* the JS and CSS files each time you change something but dont' worry, Falicitinder comes ready to do all this automatically for you using [Grunt](gruntjs.com) tasks.

To test and concatenate all your JS and CSS files simply run the following command from the root folder:

```
grunt
```

After doing all tasks it will keep watching for changes on the JS and CSS files and will re-build everything everytime you change something <3

Alternatively you can run specific tasks if you wish:

###### Testing JS files
-----------------------

```
grunt jshint
```

This will test (lint) all your JS for errors in the code.

*[Documentation](https://github.com/gruntjs/grunt-contrib-jshint)*

###### Concatenating JS
-----------------------

```
grunt concat
```

This will concatenate all JS libraries and custom scripts.

*[Documentation](https://github.com/gruntjs/grunt-contrib-concat)*

###### Minifying CSS
--------------------

```
grunt cssmin
```

This will minify and concatenate all CSS files.

*[Documentation](https://github.com/gruntjs/grunt-contrib-cssmin)*

###### Watching for changes
---------------------------

```
grunt watch
```

This will run all tasks when there is a change to the CSS or JS files.

*[Documentation](https://github.com/gruntjs/grunt-contrib-watch)*