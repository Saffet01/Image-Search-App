import axios from 'axios';

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization: 'Client-ID hJos6c57QgG6jglLo-Sj3LNPxucj67L6Au6Ga5SArl4'
      },
      params:{
        query: term
      }
    });
    console.log(response.data.results);
    return response.data.results;
  }

  export default searchImage;