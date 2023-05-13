
//manupulate html dom using javascript 

/*

const heading = document.createElement('h1');
heading.innerHTML = 'hello';

const root = document.getElementById('root');

root.appendChild(heading);

console.log(root);

*/

//manupulate Html dom using react dom

/*
const heading = React.createElement(
    "h1",
    {
      id: "title",
      key: "hii"
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      key: "hi",
      className: 'h1',
      style: {
        "background-color": 'red',
        "color": 'white'
      }
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
      key: "h"
    },
    [heading, heading1]
  );

  console.log(heading);
  */


  const Heading = React.createElement('h1',{id: "Title",key: "h1"}, "hello world1");
  const Heading2 = React.createElement('h2',{id: "h", key: "h2"},"hello world2");
  const Heading3 = React.createElement('h3',{id: "Titles", key: "h3"}, "hello world 3");

  const Container = React.createElement("div",{key: "hello"}, [Heading, Heading2, Heading3]);


  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(Container);