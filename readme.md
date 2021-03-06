#Node Modules

You're commissioned to create an application that generates automated responses for the end user, depending on the day of the week. While creating your application you think to yourself, "This application might be something I can use in the future! I think I will make a module for the auto response functionality."

##Setup
===
- Fork
- Clone
- CD into directory

Create your module in `autoResponse.js` and export it to `app.js`. The goal of this exercise it to develop a better understanding of `module.exports`, `require`, and `Node Modules`.


##Resources
===
- [Node Documentation](https://nodejs.org/api/)
- [NPM](https://www.npmjs.com/)	

##Things to Think About
===
Some of the questions/challenges below may "require"(<-- get it?) some extra research and digging. They will be discussed further at the end of the exercise.

1. What do the following commands mean? (npm init, npm install <module> -g, npm install <module> --save)
2. What does require do? How does it work differently for Core, Local, NPM modules?
3. How would you export a function vs. object?
4. Public vs. Private Interfaces, why do they matter when working with modules?
5. module.exports vs. exports what is the difference between the two?
6. What is package.json?


##Challenge
===
- In `autoResponse.js`
  - Create your module
  - This module should have a public interface which is capable of accepting a string argument in the form of a day.
  - export the module.
  
  ```
  EX:
  
  autoRespond.getResponse("Thursday");
  
  => "Hey!!! Time to tweet some #TBT pics!"
  
  //responses can be whatever your want them to be. They should be different depending upon the day of the week.
  
  ``` 
  
  

- In `app.js` 
  - Create an application which uses your new module and prints to another file entirely. (*Hint:* File doesn't necessarily have to exist)
  - Your application will need to be able to "know" the current "moment" or day of the week without the user inputting it themselves.
  - **Requirements**: Must utilize your `autoResponse.js` module, 1 core module, and 1 module from NPM.

