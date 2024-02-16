import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Create from './components/Create';
import Edit from './components/Edit'

function App() {
  const [collect, setCollect] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
})

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(collect));
  }, [collect]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
          path='/'
          element={<Home collect={collect} setCollect={setCollect}/>}/>
          <Route
          path='/create'
          element={<Create collect={collect} setCollect={setCollect}/>}/>
          <Route
          path='/edit/:id'
          element={<Edit collect={collect} setCollect={setCollect}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
