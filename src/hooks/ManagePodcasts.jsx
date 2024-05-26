import { useState, useEffect } from "react";

const VITE_PODCASTS_URL = import.meta.env.VITE_PODCASTS_URL;

const ManagePodcasts = () => {   

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {

    const getPodcasts = async () => {
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
    } 

    getPodcasts();
  }, []);

  return { podcasts };

}

export default ManagePodcasts;
