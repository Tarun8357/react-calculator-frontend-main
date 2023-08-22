import './App.css';
import Calculator from './calculator-components/calculator/calculator';
import NavBar from './calculator-components/nav-pages/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Register from './calculator-components/nav-pages/register-utils/register';
import Login from './calculator-components/nav-pages/login-utils/login';

function App() {
  return (
  <Router>
  <div className='App'>
    <div><NavBar/></div>
    
    {/* li statements */}
             {/* <Link to="/Home"> <Home/> </Link>
              <Link to="/Login"><Login/></Link>
             <Link tp="/Register"> <Register/></Link> */}

          <Routes>
                 <Route exact path='/home' element={< Calculator />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
          </Routes>   
    
  </div>
  </Router>

      
  );
}

export default App;
