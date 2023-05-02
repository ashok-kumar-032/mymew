import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import { Groomers } from './Components/Groomers';
import { Adopted } from './Components/Adopted';

function App() {
  return (
    <div className="App">
      <Mynav />
      <Adopted />
      <Groomers />
    </div>
  );
}

export default App;
