import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../context/loading';

const VITE_PODCASTS_URL = import.meta.env.VITE_PODCASTS_URL;

const ManagePodcasts = () => {   

  const [podcasts, setPodcasts] = useState([]);

  const {loading, setIsLoading} = useContext(LoadingContext);
  
  useEffect(() => {

    const getPodcasts = async () => {

      try {
        setIsLoading(true);
        const response = await fetch(VITE_PODCASTS_URL);
        const data = await response.json();
  
        const podcasts = data.feed.entry.map(pod => ({
           id: pod.id.attributes['im:id'],
           name: pod['im:name'].label,
           author: pod['im:artist'].label,
           img: pod['im:image'][2].label,
          })
        );
  
        setPodcasts(podcasts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } 

    getPodcasts();
  }, [setIsLoading]);

  return { podcasts };

}

export default ManagePodcasts;
