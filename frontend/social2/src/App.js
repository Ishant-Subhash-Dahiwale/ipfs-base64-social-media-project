import './App.css';
import Button from '@mui/material/Button';
import navbar from './components/navbar';
import postcard from './components/postcard/postcard';

function App() {
  return (
    <div className="App">
      {navbar()}
      <div>
        {postcard()}
      </div>
    </div>
  );
}

export default App;
