import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import { Groomers } from './Components/Groomers';

function App() {
  return (
    <div className="App">
      <Mynav />
      <Groomers/>
    </div>
  );
}

export default App;
