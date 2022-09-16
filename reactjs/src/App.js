import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Question1 } from './components/Question1';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Question1 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
