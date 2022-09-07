# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshots/front%20page.png)

![](./screenshots/back%20page.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/javascript-y0IFXfjWX_)
- Live Site URL: [GitHub Pages](https://sambase.github.io/Interactive-rating-component/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

I used `tabindex` to make my `<li>` "focusable".

```html
<li class="round-icons" tabindex="0" value="1" onclick="ratingFunc(this)">1</li>
```
```css
ul li:focus{
  background-color: var(--light-grey);
  color: var(--white);
}
```

Used `onclick()` function to trigger javacript. `value` attribute is used to get the rating.

```html
<li class="round-icons" tabindex="0" value="1" onclick="ratingFunc(this)">1</li>
```
```js
function ratingFunc(id){
  const rating = document.getElementById("rating-number");
  rating.innerHTML = id.value;

```

### Continued development

JS is a big topic and I have just scratched the surface. I will be focusing on making projects which involves JS insted of completing tutorials.

### Useful resources

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - This helped me in adding functionality using JS.
- [:focus](https://css-tricks.com/almanac/selectors/f/focus/) - Used this to use focus pseudo class on `<li>`.

## Author

- GitHub - [@SamBase](https://github.com/SamBase)
- Frontend Mentor - [@SamBase](https://www.frontendmentor.io/profile/SamBase)
