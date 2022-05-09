import NavBar from './components/NavBar/NavBar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'; 

// Pages
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/Login';
import UsPage from './pages/Us';
import FaqPage from './pages/Faq';
import DetailPage from './pages/Detail';
import OrdersPage from './pages/Orders';
import CartPage from './pages/Cart';

// Estilos utilizados
import './App.css';

// Contextos
import {CartProvider} from './context/CartContext';
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
    <div className="App">      
   <AuthProvider>  
      <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/contacto' element={<ContactPage/>}/>
              <Route path='/ordenes' element={<OrdersPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/categoria/:category' element={<HomePage/>} />  
              <Route path='/'  element={<HomePage/>} />
              <Route path="/productos/:id" element={<DetailPage/>} />
              <Route path='/nosotros' element={<UsPage/>}/>
              <Route path='/faq' element={<FaqPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>       
            </Routes>
          </BrowserRouter>
        </CartProvider>   
      </AuthProvider>      
    </div>
  );
}

export default App;
