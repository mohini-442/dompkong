
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Headersection from './components/Headersection';
import Section3 from './components/Section3';
import Card1section from '../src/components/Card1section'
import Section4 from './components/Section4';
import Section2 from './components/Section2';
import Slidersection from './components/Slidersection';
import Accordiansection from './components/Accordiansection';
import Section5 from './components/Section5';
import Timelinesection from './components/Timelinesection';
import Loader from './components/Loader';
import Backtotop from './components/Backtotop';




function App() {
  return (
    <div className="App">
      <Loader />
      <Headersection />
      <Section2 />
      <Card1section />
      <Section3 />
      <Section4 />
      <Timelinesection />
      <Slidersection />
      <Section5 />
      <Accordiansection />
      <Backtotop />
    </div>
  );
}

export default App;
