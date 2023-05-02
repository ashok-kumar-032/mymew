import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import { TopScrool } from './Components/TopScrool';
import Let from './Components/Let';
import Dog from './Components/Dog';
import { Groomers } from './Components/Groomers';

function App() {
  return (
    <div className="App">
      <Mynav />
      <TopScrool />
      <Let />
      <Dog />
      <Groomers/>
    </div>
  );
}

export default App;
