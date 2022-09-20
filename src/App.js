import logo from './logo.svg';
import './App.css';
import Footer from './components/features/Footer/Footer';
import Header from './components/features/Header/Header';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
     
    </div>
  );
}

export default App;
