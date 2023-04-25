import './App.css';
import logoJulia from './img/julia.svg'
import logoCirceya from './img/logoCirceya.svg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="menu-header">
          <img className="logo" src={logoCirceya} alt="circeya"/>
          <div className="mobili-number">+7 (495) 495-49-54</div>
        </div>
      </header>
      <div className="main-container">
          <div className="container"> 
            <h1 className="title-block">ut aliquip ex ea commodo consequat</h1>
              <img className="logo-julia" src={logoJulia} alt="logoJulia"/>
                <p className="title-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p className="text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
          </div>
      </div>
    </div>
  );
}

export default App;
