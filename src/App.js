import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer title='Listado de Productos'/>  
    </div>
  );
}

export default App;
