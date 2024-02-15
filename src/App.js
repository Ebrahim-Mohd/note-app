import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
function App() {
  const [collect, setCollect] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
          path='/'
          element={<Home collect={collect}/>}/>
          <Route
          path='/create'
          element={<Create collect={collect} setCollect={setCollect}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
