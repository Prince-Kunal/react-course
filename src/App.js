
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title='TextUtils' aboutText='About'/>
      <div className='container my-3'>
        <TextForm heading='Enter your text here to Analyze'/>
      </div>
    </div>
  );
}

export default App;
