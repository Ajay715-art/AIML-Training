import './App.css';
import CompOne from '../components/comp1';
import Btn from '../components/B';
import Btn2 from '../components/B2';
import Btn3 from '../components/B3';
import NewYouTubeThumbnail from '../components/NewYouTubeThumbnail';

function App() {
  return (
    <>
    <div id="container">
      <h1>Hello World!!!</h1>
      <CompOne />
      <Btn /><br /><br />
      <Btn2 /><br /><br />
      <Btn3 />
      <NewYouTubeThumbnail
        title="My Awesome React Video"
        image="https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg"
        channel="Your Channel Name"
        duration="8:45"
      />
    </div>
    </>
  );
}

export default App;