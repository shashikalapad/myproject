const heading1 = React.createElement("h1",{
    id:'title'
},"Heading1");
console.log(heading1);
const heading2= React.createElement("h2",{
    id:'title'
},"Heading2");
console.log(heading2);
const container = React.createElement('div',{
    id:'container'},
    [heading1,heading2]);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(container);