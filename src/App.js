import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
            <div>
              <h3 className="h3Style"> Detalle del Producto</h3>
              <ItemListContainer titulo='Listado de Productos'/>  
              <ItemDetailContainer/>
            </div>  
       
    </div>
  );
}

export default App;
