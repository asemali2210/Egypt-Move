import { ConfigProvider } from 'antd';
import Nav from './components/Nav';
import Header from './components/Header';
import Newsletters from './components/Newsletters';
import Features from './components/Features';
import Posts from './components/Posts';
import Video from './components/Video';
import Blogs from './components/Blogs';
import MapContainer from './components/MapContainer';
import Footer from './components/Footer';


function App() {
  return (
    <ConfigProvider direction="rtl">
      <div className="App">
        <Nav />
        <Header />
        <Newsletters />
        <Features />
        <Posts   />
        <Video   />
        <Blogs   />
        <MapContainer   />
        <Footer   />
      </div>
    </ConfigProvider>
  );
}

export default App;
