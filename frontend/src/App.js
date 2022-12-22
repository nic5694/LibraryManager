import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import BookInventory from './Pages/BookInventory';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/BookInventory" element={<BookInventory />} />
      </Routes>
    </div>
  );
}

export default App;
