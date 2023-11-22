# Jhtml Tutorial 2*

> If, Else, and Mobile/Computer screen selectors, Include, Toggle, and Style

## If/Else

1. Set up the `react();` function

```js
function react(){
	return 0;
}
```

2. Call the jif or jelse functions before return 0;
3. Pass in your variables using `[{var1},{var2}]` system

```js
let show = false;
function react(){
	jif([{show}]);
}
```

4. To actually affect elements you can add the if/else attribute

```html
<p if="show">Show is True!</p>
<p else="show">Show is False!</p>
```

## Mobile/Computer Reactivity

1. To hide and show objects if the screen is > or < 600px
2. Initiate _(outside the react function)_ with `jmobile();`
3. To actually affect elements use `mobile` and `computer` attributes

```html
<p mobile> Your screen is mobile or <600px </p>
<p computer> Your screen is mobile or >600px </p>
```

## Toggle a variable 

1. To quickly switch from true or false reactively use `toggle();`

```js
let show = false;
function clicked(){
	show = toggle(show);
}
```

## Include separate html files

1. To add the contents of a seperate html file to your page
2. Initiate _(outside the react function)_ with `include();`
3. To bring in the data from a separate html file use the `incl` attribute

```html
<!--Content.html has <p>Hello World</p> inside-->
<div incl="Content.html"></div>
```

## Style an element

1. To style an element in JS by classnames 
2. Use the `style();` function that takes 3 attributes, ClassName, 	Property, and Change

```js
style("green","color","green");
```
