import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <div className="filler"></div>
    </div>
  );
}

export default App;