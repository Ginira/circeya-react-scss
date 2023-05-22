import './App.scss';
import logoCirceya from './images/logoCirceya.svg';
import Block from './components/Block/Block';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll'
import img from './data/images'
import {text} from './data/text';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="container">
            <div className="header__content">
          <img className="logo" src={logoCirceya} alt="logoCirceya"/>
          <a className="header__phone" href="tel:74954954954">+7 (495) 495-49-54</a>
          </div>
          </div>
        </div>
      </header>
      <main>
        <div className="portfolio">
          <div className="container">
            <div className="portfolio__top">
              <Block text={text[0]} text1={text[1]} img1={img[0].imgUPLH} img2={img[0].imgUPRH}/>
            </div>
            <div className="portfolio__scroll">
              <HorizontalScroll/>
            </div>
            <div className="portfolio__bottom">
              <Block text={text[0]} text1={text[1]} img3={img[0].imgDownLH} img4={img[0].imgDownRH}/>
            </div>
     
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
        <p className="logo__footer">
          © TEST, 1022–2022
        </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
