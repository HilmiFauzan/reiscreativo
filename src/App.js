import About from './About';
import './App.css';
import Favorite from './Favorite';
import Footer from './Footer';
import Gallery from './Gallery';
import Main from './Main';
import Navbar from './Navbar';
import PointList from './PointList';
import Prealoader from './Prealoader';

function App() {
  return (
    <div className="">

      <div className='container-fluid'>
        <Prealoader />
        <Navbar />
        <Main />
        <About />
        <Gallery />
        <Favorite />
        <PointList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
