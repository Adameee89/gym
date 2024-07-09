

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': '4c6806186bmshdc5a602fb55b29dp18c21bjsnf96c5dc5ebe2'
      
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4c6806186bmshdc5a602fb55b29dp18c21bjsnf96c5dc5ebe2',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json()

    return data;

}