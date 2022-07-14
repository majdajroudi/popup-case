import './App.css';
import PopupContextProvider from './context';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <PopupContextProvider>
        <Layout />
      </PopupContextProvider>
    </div>
  );
}

export default App;
