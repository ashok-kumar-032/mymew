import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import { TopScrool } from './Components/TopScrool';
import Let from './Components/Let';
import Dog from './Components/Dog';
import { Groomers } from './Components/Groomers';
import { Adopted } from './Components/Adopted';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Mynav />
      <Adopted />
      <TopScrool />
      <Let />
      <Dog />
      <Groomers />
      <Footer />
    </div>
  );
}

export default App;
