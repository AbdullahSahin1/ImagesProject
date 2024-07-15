import axios from 'axios';


const searchImages = async (term)=>{  
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID 8VV7VbCw6yPfWaZClYwgLg_lYLIt5DbNPfS8MsiK528'
      },
      params:{
        query: term,
      }
    })
    return response.data.results
  }

  export default searchImages