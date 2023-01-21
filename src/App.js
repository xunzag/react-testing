import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Course from './Components/Course';
import Header from './Components/Header';
import Home from './Components/Home';

import {TimeSlot} from './Components/TimeSlot';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/TimeSlot" element={<TimeSlot/>} />
        <Route path="/Course" element={<Course/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;