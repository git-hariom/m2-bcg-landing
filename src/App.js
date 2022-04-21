import './App.scss';
import Header from './sections/Header/Header';
import Branding from './sections/Branding/Branding';
import Features from './sections/Features/Features';
import Advantages from './sections/Advantages/Advantages';
import Testimonials from './sections/Testimonials/Testimonials';
import Support from './sections/Support/Support';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Branding></Branding>
      <Features></Features>
      <Advantages></Advantages>
      <Testimonials></Testimonials>
      <Support></Support>
      <Footer></Footer>
    </div>
  );
}

export default App;
