# Jhtml Tutorial*

Jhtml is a fast JavaScript library designed to bring quick reactivity to HTML sites

## Download and Setup

1. Download the latest version of Jhtml from [Here](https://guyotjs.github.io/Jhtml/build/jhtml.js) or link it directly through HTML
2. Inside the head tag include `<script src="./jhtml.js"></script>` 
Or `<script src="https://guyotjs.github.io/Jhtml/build/jhtml.js"></script>`

⭐ Congratulations **Jhtml** is in your project

## Reactive content

1. At the bottom of the body tag make a new `<script></script>` tag
2. Inside the script tag make a new function called react. _(Must include return 0;)_

```js
function react(){
  return 0;
}
```

3. Now your project is able to react.

### Changing the content reactively

```html
<p id="text"></p>
```
1. Create a new variable for the text content `let val = "This text will change"`
2. Inside the `react()` function add a new line before the return 
3. The content func will take 2 arguments the id and the text
4. `content("text", val);`
5. Inside the script tag create a new function for the button click event

```js
let val = "This text will change"
function react(){
  content("text", val);
  return 0;
}
```
6. Create a button in the body tag

```html
<button onclick="click()"></button>
```

7. Now create a new function for the button click event. `function click(){}`
8. Inside the click function all you have to do is include `val = "The text changed"`

**Final Code**

```html
<button onclick="click"></button>
<p id="text"></p>
<script> 
  let val = "This text will change"
  function react(){
    content("text", val);
    return 0;
  }
</script>
```

⭐ Congratulations you made your	first reactive project

> Tutorial is a work in progress more stuff in the works.
