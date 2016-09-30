# Mbrt_Services
Mandelbrot Services Letter to introduce them with potential clients.



## Concepts Used
* Dynamic content by URL and pure js, without html partials
* Block section "full page" navigation. Mousewheel to detect if user scroll up or down, then change the section



## FAQ'S of this project
* What other function is more compatible between browsers than indexOf(), it's purpose is to get the position of an element in arrays

* How to normalize the sensibility of eventY on mousewheel?

* Which performance is better and why? The old carousel functionality or the new one

* On the Carousel objects constructor I had to use "this", but it depends of the context, so I used ".bind()" function to refer to the Carousel object. Is it a good practice? Should I declare a variable of "this" instead? Here are some references of the answer:
http://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-context-inside-a-callback
http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

* Is it OK to use so many setTimeouts()? Or there is another way to make callbacks with custom classes? What should I give priority: less setTimeouts() or readable functions?



## Answered FAQ'S of this project
* How to order smooth and clean JS files
=> Using Gulp to compile all files in one

* How to use jquery ready properly
=> Use it once, or don't use it

* How to split scss files to make it more readable and preserve only one css final file
=> Did it right, use folders and '_first' names to include them on one file

* When you load the page in any section except index, are the right nav bars fade in animation showing smoothly?
=> Yes, the problem was your computer performance

* What are the dangers on using document.onload js function to run the js files
=> document.onload() triggers after all the elements (HTML, CSS, JS, IMG, etc) have been downloaded, document.ready() is recommended to trigger functions after the JS has been downloaded

* How to make a smooth loader
=> Again, the problem was your computer performance

* What are the conditionals to hide the page for IE explorer non compatible versions
=> <!--[if lt IE 8]> <![endif]-->

* 404.html is only for dynamic webs?
=> Yes

* Have you ever seen or done this kind of text animations? http://renaterechner.at/en/
=> You can use before pseudo classes or duplicate the object and use overflow hidden attribute

* How to put passwords or another resource to block the access to an specific user
=> Don't, horrible UX