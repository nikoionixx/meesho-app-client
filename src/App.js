import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './modules/auth/pages/signup/signup.pages';
import Login from './modules/auth/pages/login/login.page';


function App() {
  return (
    <div className="App bg-white">
      <Router>
          <Routes>
              <Route path='signup' element={<Signup />}></Route>
              <Route path='login' element={<Login />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
