import './App.css';
import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';

function App() {
  return (
    <div className="App">
     <div className='main-card'>
      <LeftCard />
      <RightCard/>
     </div>
    </div>
  );
}

export default App;
