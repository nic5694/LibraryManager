import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddBook from './Pages/AddBook';
import DeleteBook from './Pages/DeleteBook';
import EditBook from './Pages/EditBook';
import AddLibrary from './Pages/AddLibrary';

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
        <Route path="/DeleteBook" element={<DeleteBook />} />
      </Routes>

      <Routes>
        <Route path="/EditBook/:Id" element={<EditBook />} />       
      </Routes>
    </div>
    /*
          <Route exact path="/edit/:Id" render={(props) => <EditBook Id={Id} {...props} />} />
     component={EditBook} />
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/AddBook" component={AddBook} />
      <Route path="/DeleteBook" component={DeleteBook} />
      <Route path="/edit/:bookId" component={EditBook} />
    </Router>*/
  );
}

export default App;
