import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Owner from './components/Owner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Slider />
    <h2>Welcome to our kennel club</h2>
    <h3>Since 2005</h3>
      </header>
      <Owner />
    </div>
  );
}

export default App;
