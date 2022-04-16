import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import ETC from '../routes/ETC';
import Home from '../routes/Home';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/etc' element={<ETC />}/>
           <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
      </Router>
  );
}

export default App;
