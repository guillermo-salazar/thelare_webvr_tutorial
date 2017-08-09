### Key bindings

`cmd + space` open spotlight

`cmd + tab` switch between apps

`cmd + T` open new tab

`cmd + s` save

`cmd + shift + p` for atom: open command view

`cmd + option + i`  open developer tools

### Shell Commands

`ls` list files

`mkdir directoryName` make directory

`rmdir directoryName` remove directory

`touch filename` create file

`rm filename` remove file

`pwd` print current directory path

`open filename` opens based on extension (html will be opened in the browser)

`cd ..` move back one directory

`cd directoryName` move into directoryName

### HTML

`<start-tag> </start-tag>` you start a 'tag' with `<>` and end it with `</>`

`<script src="filename.js"></script>` this adds a javascript file to the html page

`<div id="class-name-for-element"></div>` create a div with id 'class-name-for-element'

`<br> </br>` - Line break

go to: https://www.w3schools.com/html/html_elements.asp for more examples

### Javascript

`var variableName = 45`  integer

`var variableName = "foo"`  strings surrounded by quote

``` javascript
var variableName = {
  key: "stringValue",
  firstName: "Jesus",
  lastName: "nunya"
}; // {} think of them as dictionaries (key/value pairs)

variableName['firstName'] // Jesus
variableName['lastName'] // nunya

```


``` javascript
// define functionName with no parameters,
var functionName = function() {
  return "someValue";
};

// call functionName
functionName(); // returns 'someValue'
```

``` javascript
// define functionName with 2 parameters
var functionName = function(parameter1, parameter2) {
  return "bat" + parameter1 + parameter2;
};

// call functionName with 'man' and 'thing'
functionName('man', 'thing'); // returns 'batmanthing'
```
function, method(parameter1, parameter 2) {}

``` javascript
var variableName = function () {
  console.log('Where is this printed out?');
  alert('What is a pop up');
};
```

``` javascript
var variableName = new VRView.Player('#class-name-for-element', {
  width: '100%',
  height: '100%'
});
```
Call a function on a HTML element with id "class-name-for-element"
