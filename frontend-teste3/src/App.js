import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);


  async function getTrendingMovieData(tipo) {
    try {
      const key = 'a91cc41b31ae5a5bacedf5c6f76c2ce6';
      let resp = await axios.get(`https://api.themoviedb.org/3/trending/${tipo}/day?api_key=${key}&media_type=movie`);

      setMovieData(resp.data.results);

    } catch (e) {
      console.log(e);
    }

  }

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <h1 className='text-6xl font-bold text-white p-10 text-center'>Trending movies</h1>
    <div className='text-center'>
      {movieData.map((item) =>
      <div className=' cursor-pointer inline-block bg-white h-fit w-60 max-w-sm rounded overflow-hidden shadow-lg m-5'>
        <div className='h-fit'>
          <img className=' w-full' src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
        </div>
        <div className=' text-center h-max font-bold text-xl '>
          <p className='text-purple-500 align-top m-0 p-3'>{item.original_title}</p>
        </div>
      </div>
      )}
    </div>
    </div>
  );
      }

export default App;
