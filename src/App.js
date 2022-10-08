import {BrowserRouter as Router,Routes,Route , Navigate} from 'react-router-dom';
import Signup from './modules/auth/pages/signup/signup.pages';
import Login from './modules/auth/pages/login/login.page';
import Home from './modules/home/pages/home.page';


function App() {
  return (
    <div className="App bg-white">
      <Router>
          <Routes>
              <Route path="home" element={<Home />}>
                
              </Route>
              <Route path='signup' element={<Signup />}></Route>
              <Route path='signup' element={<Signup />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='' element={<Navigate to="/login"/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
