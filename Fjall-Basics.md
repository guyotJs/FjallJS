# [#](#Fjall) Fjall JS Tutorial*

FjallJS is a new lightweight JavaScript framework to add reactivity in a **snap**. 

## [##](Data) Setting your Data

1. All of your variables are declared on your `<body>` tag. 
2. Add the attribute `data=''` inside your body tag start
3. It should look something like this (btw the use of single quotes is important)
```html
<body data=''>
```
4. Now to actually declare some variables!
5. inside your data tag you can add `{}` inside the curly brackets is where your variable go. 
6. *Your variable names will always be a string* 
7. Lets set a variable called show that's false
```html
<body data='{"show":false}'>
```
8. ⭐ Congrats you successfully wrote a variable!
9.  *Variables work as array boolean int string etc.*

## [##](#Info) Basic Info   

1. click, if, and else all are able to take full arguments such as...
```html
<p if="count==1">Count is 1</p>
<button click='alert("Hi!");'>Say Hi</button>
```
2. When writing a for loop you need 3 attributes
a. for="(arr to loop over)" 
b. item="(what to create items as)"
c. item-class="(how to style the items)"
3. Use single quotes `''` when your attribute needs to use double quotes `""`
```html
<button click='alert("Clicked");'>Click Me!<button>
```

## [##](#todo) A basic Todo app

1.  Create 2 variables one as an array the other a string.
```html
<body data='{"arr":[],"val":""}'>
```
2. Add a input tag and bind the data to your string variable
```html
<input placeholder="Add Todo" type="text" bind="val"/>
```
3. Crete a button to push the input value to your array onclick
```html
<button click='arr.push(val)'>Add Todo!</button>
```
4. Create a ordered list to loop through your array
```html
<ol for="arr" item="li" item-class=""></ol>
```
5. ⭐ Congrats you made a todo app!

*Full Code*
```html
<body data='{"arr":[],"val":""}'>
  <input placeholder="Add Todo" type="text" bind="val"/>
  <button click='arr.push(val)'></button>
  <ol for="arr" item="li" item-class=""></ol>
  <script src="./fjall-min.js"></script>
</body>
```
