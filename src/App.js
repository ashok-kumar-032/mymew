import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import { TopScrool } from './Components/TopScrool';
import Let from './Components/Let';
import Dog from './Components/Dog';
import { Groomers } from './Components/Groomers';
import { Adopted } from './Components/Adopted';
import { Ourservice } from './Components/Ourservice';
import Loading from './Components/Loading';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Loading />
      <Mynav />
      <Adopted />
      <TopScrool />
      <Let />
      <Ourservice />
      <Dog />
      <Groomers />
      <Footer />
    </div>
  );
}

export default App;
