import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../context/loading';

const VITE_PODCASTS_URL = import.meta.env.VITE_PODCASTS_URL;
const DAY_IN_MILISECONDS = 864000000;

const ManagePodcasts = () => {   

  const [podcasts, setPodcasts] = useState([]);

  const {setIsLoading} = useContext(LoadingContext);
  
  useEffect(() => {

    const getPodcasts = async () => {

      const lastFetched = localStorage.getItem('lastFetched');
      const now = new Date().getTime();

      if (lastFetched && now - lastFetched < DAY_IN_MILISECONDS) {
        const storedPodcasts = localStorage.getItem('podcasts');
        setPodcasts(JSON.parse(storedPodcasts));
      } else {
        try {
          setIsLoading(true);
          const response = await fetch(VITE_PODCASTS_URL);
          const data = await response.json();
    
          const podcasts = data.feed.entry.map(pod => ({
             id: pod.id.attributes['im:id'],
             name: pod['im:name'].label,
             author: pod['im:artist'].label,
             img: pod['im:image'][2].label,
             description: pod.summary.label,
            })
          );
    
          setPodcasts(podcasts);
          setIsLoading(false);
          localStorage.setItem('lastFetched', now);
          localStorage.setItem('podcasts', JSON.stringify(podcasts));
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    } 

    getPodcasts();
  }, [setIsLoading]);

  return { podcasts };

}

export default ManagePodcasts;
