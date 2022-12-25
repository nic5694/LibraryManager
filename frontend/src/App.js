import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import AddBook from './Pages/AddBook';
import DeleteBook from './Pages/DeleteBook';
import EditBook from './Pages/EditBook';
import AddLibrary from './Pages/AddLibrary';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Routes>
        <Route path="/AddBook/:libraryId" element={<AddBook />} />
      </Routes>

      <Routes>
        <Route path="/AddLibrary" element={<AddLibrary />} />
      </Routes>
      <Routes>
        <Route path="/EditBook/:Id" element={<EditBook />} />       
      </Routes>
    </div>
  );
}

export default App;
