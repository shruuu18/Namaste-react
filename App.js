// creting headig in react
const heading = React.createElement("h1" , {id: "heading" } , "hello world from react"); 

console.log(heading);
 
//created and injected root in react 
const root = ReactDOM.createRoot (document.getElementById("root")); 
root.render(heading); 