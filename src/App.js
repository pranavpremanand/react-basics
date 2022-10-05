import './App.css'
import Header from "./components/Header"
function App() {
  const data = "Description"
  const name = "Pranav"
  return (
    <div>
      <Header name = {name}/>
      <h1 style={{color:'gold'}}>Hello world</h1>
      <br/>
      <p className='hello'>This is {data}</p>
      <Hello/>
    </div>
  );
}

export default App;

function Hello(){
  return (<h1>Hai</h1>)
}