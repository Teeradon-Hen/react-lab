import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import "./i18n"
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {/* <div style={{flex:1}}>


      </div> */}


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />



    </div>
  );
}

export default App;
