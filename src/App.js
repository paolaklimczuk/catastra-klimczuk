import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'; 
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import UsPage from './pages/Us';
import FaqPage from './pages/Faq';
import DetailPage from './pages/Detail';
import CartPage from './pages/Cart';

function App() {
  return (
    <div className="App">        
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/contacto' element={<ContactPage/>}/>
            <Route path='/categoria/:category' element={<HomePage/>} />  
            <Route path='/'  element={<HomePage/>} />
            <Route path="/productos/:id" element={<DetailPage/>} />
            <Route path='/nosotros' element={<UsPage/>}/>
            <Route path='/faq' element={<FaqPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
       
          </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
