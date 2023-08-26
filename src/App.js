import Homepage from './pages/homepage';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
