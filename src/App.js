import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import ImageList from './Components/ImageList';
import searchImage from './api'

function App() {

  <searchImages/>
  
  const [images, setImage] = useState([]);

  const handleSubmit = async (term) => {
    console.log(term);
    const result = await searchImage(term);
    setImage(result);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
