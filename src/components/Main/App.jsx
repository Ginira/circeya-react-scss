import './App.css';
import logoCirceya from '../../pictures/logoCirceya.svg';
import Block from '../Block/Block';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll'
import img from '../../images'
import {text} from '../../text';

function App() {
  return (
    <div className="App">
      <header>
        <div className="menu-header">
          <img className="logo" src={logoCirceya} alt="logoCirceya"/>
          <div className="mobile-number">+7 (495) 495-49-54</div>
        </div>
      </header>
      <main>
        <div className="main-container">
          <div className='container'>
            <div className='block1'>
              <Block text={text[0]} img1={img[0].imgUPLH} img2={img[0].imgUPRH}/>
            </div>
            <div className='blockScroll'>
              <HorizontalScroll/>
            </div>
            <div className='block2'>
              <Block text={text[0]} img3={img[0].imgDownLH} img4={img[0].imgDownRH}/>
            </div>
            <footer>
      <div className="footer">
        <p className="logo-footer">
          © TEST, 1022–2022
        </p>
      </div>
      </footer>
          </div>
        </div>
     
      </main>
    </div>
  );
}

export default App;
