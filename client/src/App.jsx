import './App.css';
import Signup from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
