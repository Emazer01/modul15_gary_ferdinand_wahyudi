import './App.css';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
import { Search } from './components/Search';
import {Main} from './components/Main';
import { Details } from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/search/:judul" element={<Search />}></Route>
        <Route path=":isbn" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
