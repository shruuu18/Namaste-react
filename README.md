# Namaste-react

// creting headig in react
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "Hello from React"
);
// in jsx format
const Title = () => {
    <h1 id="heading">Hello from Jsx 🚀</h1>};

//javascript under jsx
const number = 10000;

//react functional component
const Heading = () => {
    return (
      <div id="container">
        {number}
        {Title()}
        <Title/>
        <h1 id="heading">Hello Brajesh Sinha you know what?</h1>
        <h1 className="head">I Adore you alot❤️</h1>
      </div>
    );
  };


const root = ReactDOM.createRoot(document.getElementById("root")
);

root.render(<Heading/>);