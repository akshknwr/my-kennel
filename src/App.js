import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Owner from './components/Owner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Slider />
      </header>
      <Owner />
    </div>
  );
}

export default App;
