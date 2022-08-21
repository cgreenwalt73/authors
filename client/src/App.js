import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList/>} path='/' default />
          <Route element={<AuthorForm/>} path='/new' default />
          <Route element={<EditAuthor/>} path='/edit/:id' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;