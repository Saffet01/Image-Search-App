import './App.css';
import SearchHeader from './SearchHeader';
import searchImage from './api'

function App() {

  <searchImages/>
  
  const handleSubmit = (term) => {
    console.log(term);
    searchImage(term);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
    </div>
  );
}

export default App;
