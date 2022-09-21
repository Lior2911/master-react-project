import logo from './logo.svg';
import './App.css';
import Footer from './components/features/Footer/Footer';
import Header from './components/features/Header/Header';
import Home from './components/pages/Home/Home';
import { BrowserRouter,Link } from 'react-router-dom';
import Router from './Router.componet';

const pageArray = ["home","about","contact us"];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Link to={Home} element={<Home/>}/>
      {pageArray.map((page)=>
      <Link to={page}><button>{page}</button></Link>)}
      <Router/>

      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
