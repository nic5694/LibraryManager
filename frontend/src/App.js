import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import BookInventory from './Pages/BookInventory';
import AddBook from './Pages/AddBook';
import DeleteBook from './Pages/DeleteBook';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Routes>
        <Route path="/AddBook" element={<AddBook />} />
      </Routes>

      <Routes>
        <Route path="/DeleteBook" element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;
