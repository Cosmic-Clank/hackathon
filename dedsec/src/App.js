import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import BtmNav from './BtmNav';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
      <BtmNav />
    </div>
  );
}

export default App;
