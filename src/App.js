import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import Bai4 from './components/Bai4'; 
import Vidu3 from './components/Vidu3';
import Hello from './components/Hello';
import Avatar from './components/Avatar';
import { items, movies } from './components/Data';
import Vidu4 from './components/Vidu4';
import Vidu5 from './components/Vidu5';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import vidu1 from './components/vidu1';
import vidu2 from './components/vidu2';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu/>
        <Routes>
          <Route path="/vidu1" element={<vidu1 />} />
          <Route path="/vidu2" element={<vidu2 />} />
          <Route path="/vidu3" element={<Vidu3 />} />
          <Route path="/vidu4" element={<Vidu4 />} />
          <Route path="/vidu5" element={<Vidu5 />} />
          <Route path="/bai2" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
          <Route path="/bai4" element={<Bai4 />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/items" element={<items />} />
          <Route path="/movie" element={<movies />} />
          <Route path="/" element={<Header />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
