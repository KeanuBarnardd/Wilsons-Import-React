# Wilsons Import React
![Website Header Image](/wilson/src/Assets/Readme/Header.PNG)

<br>
Here is my completed project link https://melodious-jelly-d6d05e.netlify.app/   
 
## About this Project 
This is my first published react website that was designed and developed myself, It is a mock business site for a trucking company. This was the first time taking on the BEM methodology with SCSS. Coupled with my technologies I also used React-Router, Framer motion and React Icons to finish this website. 


## Technologies Used
This was my first completed and published website where I really put my css and design skills to the test. Whilst learning and understand the basics of react-router and React as a whole.
<br>

[![My Skills](https://skills.thijs.gg/icons?i=js,html,css,react)](https://skills.thijs.gg)

## What I learned 
When building this project I learned the importance of global variables planning with CSS & SCSS. As I worked through the project I realised that I was using the same styling formats for the same tags. Eg. H1 or P tags. What I was doing was manually styling the tags through the parent element on that page. What I have no learned to do from making this mistake is create a Global and an App style sheet. 
<br>
Here is an example of how I used over-arching styles is added at the top level App.jsx component so it can be access throughout all the child components. Such as my header texts and P text tags. 
```scss
.head-text {
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  // Colour here
  text-transform: capitalize;

  span {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
}

.p-text {
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-color);
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
}
```
<br>
Now here is an example of using a Global style sheet to create variables I can access through out my css on the fly and keep a consistent theme/colour pallete through out the website.

<b4>

```css
:root{
 --font-base: "DM Sans", sans-serif;
  --p-0: 0.8rem;
  --p-1: 1rem;
  --p-2: 1.5rem;
  --p-3: 3rem;
  --gap-0: 10px;
  --gap-1: 20px;
  --gap-2: 40px;
  --gap-3: 60px;
  --pad-btn-1-w: 1.7rem;
  --pad-btn-1-h: 0.8rem;

  --fs-1: 0.9rem;
  --fs-2: 1.2rem;

  --fs-header-1: 5.6rem;

  /*Custom-Main Colours to be changed to suit theme for website.*/
  --white-color: #fff;
  --primary-color: grey;
  --secondary-color: rgb(255, 160, 82);
  --gray-color: grey;
  --black-color: black;

  /*Set Colours*/
  --grey-100: #e9ecef;
  --grey-200: #dee2e6;
  --grey-300: #adb5bd;
  --grey-400: #6c757d;
  --grey-500: #495057;
  --grey-600: #495057;
  --grey-700: #343a40;
  --black-100: #212529;
}
```
