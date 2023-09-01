import Homepage from './pages/homepage';
import Programs from "./pages/programs"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter basename="/bytecraft-website">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
