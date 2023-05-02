import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import { TopScrool } from './Components/TopScrool';
import Let from './Components/Let';
import Dog from './Components/Dog';

function App() {
  return (
    <div className="App">
      <Mynav />
      <TopScrool />
      <Let />
      <Dog />
    </div>
  );
}

export default App;
