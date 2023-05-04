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
import { DaCode } from './Components/DaCode';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App overflow-hidden">
      <Loading />
      <Mynav />
      <Adopted />
      <TopScrool />
      <Let />
      <Ourservice />
      <Dog />
      <Groomers />
      <DaCode />
      <Footer />

    </div>
  );
}

export default App;
