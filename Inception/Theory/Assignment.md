## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is `Emmet`?
Emmet is a tool that helps web developers write HTML and CSS code more quickly and efficiently. It allows developers to write shorthand code that expands into longer HTML and CSS code.

Emmet can also be used to quickly create multiple HTML or CSS elements at once, such as a list of links or a series of boxes with different styles.

Overall, Emmet can help save time and improve productivity for web developers by making it easier to write and edit HTML and CSS code.



## Q: Difference between a `Library and Framework`?
"A library is like a toolbox with different tools that you can borrow and use whenever you need them, while a framework is like having a pre-designed kit with a set of rules and structures to guide you in building your project."

Then, you can give some examples of popular libraries and frameworks and explain how they are used. For example, you can mention jQuery as a library that provides pre-made animation functions, and React or Angular as frameworks that provide pre-made components and tools to build web applications.

It's important to keep your explanation clear and concise, and to use examples that are relevant to the type of work you are applying for. If you're not sure, you can ask the recruiter for more details about the job and the technologies involved.


## Q: What is `CDN`? Why do we use it?
A `Content Delivery Network` (CDN) is like having a lot of friends who live in different places around the world. If you need something, like a toy or a game, you can ask your friend who lives nearby to bring it to you. That way, you don't have to wait for your friend who lives far away to bring it to you, which could take a long time.

Similarly, when you visit a website, the website needs to send all the pictures, videos, and other things to your computer so you can see them. If the website's server is far away from your house, it could take a long time for everything to arrive, and the website might be slow.

But if the website uses a CDN, it's like having lots of friends who live in different places around the world. When you visit the website, the CDN finds the friend who lives closest to your house and asks them to bring everything to you. That way, everything arrives faster, and the website is faster too.

So, a CDN helps websites work faster by using lots of servers in different places to bring things to you faster.


A Content Delivery Network (CDN) is a network of servers located in different places around the world, designed to deliver website content more quickly and efficiently to users. By using a CDN, websites can provide a better user experience with faster loading times and improved reliability.


## Q: Why is `React known as React`?
React is known as "React" because it is a JavaScript library that focuses on efficiently updating and rendering user interfaces. The name "React" comes from its ability to react to changes in data and update the user interface accordingly, providing a responsive and interactive experience for web applications.


## Q: What is `crossorigin in script tag`?

The "crossorigin" attribute in a script tag is a security feature that allows loading of JavaScript files from external domains while still enforcing the same-origin policy to protect against potential security risks. It can have a value of "anonymous" or "use-credentials" to determine whether user credentials are sent when loading the script file.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
React is the core package of the React library that provides the basic functionality to define and render React components. It includes features such as JSX syntax, virtual DOM, component lifecycle methods, and state management.

On the other hand, ReactDOM is a package that provides additional functionality to work with the browser's DOM (Document Object Model). It allows you to render React components into the browser, manage component updates, and handle events. ReactDOM provides methods such as ReactDOM.render(), ReactDOM.hydrate(), and ReactDOM.unmountComponentAtNode().

In summary, React is the core package that provides the basic functionality for building React components, while ReactDOM provides additional functionality to render and manage React components in the browser's DOM.


## Q: What is difference between react.

`development.js` is the development version of the React library, which includes additional debugging information and error messages. This version is larger in size and not optimized for production use, as it is meant to be used during the development phase of a project. It includes all the `development tools`, such as the `React Developer Tools`, that `allow developers to easily debug and troubleshoot issues in their code`.

On the other hand, `react.production.js is the production`-ready version of the React library. It is optimized for performance and has all the debugging information and error messages removed to reduce its size. This version is smaller in size and designed for use in `production environments`, where performance and speed are critical.

Therefore, when using React via CDN, you should use the `react.production.js` version in production environments to ensure the best possible performance and user experience, while using the react.development.js version during development to take advantage of the development tools and debugging information.


## Q: What is `async and defer`?
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```