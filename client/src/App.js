import Header from './components/Header'
import Array from './components/Array'
import Footer from './components/Footer'
import GlobalContextProvider from './context/GlobalContext'
import './App.scss';

function App() {
  return (
    
    <div className="App">
      <GlobalContextProvider>
        <Header />
        <Array />
        <Footer />
      </GlobalContextProvider>
    </div>
    
    
  );
}

export default App;
