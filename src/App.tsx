import './App.css';
import { Listing } from './components/Listing';
import data from'./data/etsy.json'

const items = JSON.parse(JSON.stringify(data));

function App() {
  return (
    <div>
      <Listing items={items} />
    </div>
  )
}

export default App
