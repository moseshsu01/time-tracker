import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PrivateRoutes from './utils/PrivateRoutes';
import AddEntry from './EditEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/add-entry' element={<AddEntry/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
