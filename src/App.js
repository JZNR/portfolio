import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
