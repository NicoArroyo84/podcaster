import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../context/loading';
import { useParams } from 'react-router-dom';

const VITE_DETAILS_PODCAST_URL = import.meta.env.VITE_DETAILS_PODCAST_URL;
const DAY_IN_MILISECONDS = 864000000;

const ManagePodcastDetails = () => {   

  const [podcastDetails, setPodcastDetails] = useState(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const {setIsLoading} = useContext(LoadingContext);
  
  const { podcastId } = useParams(); 

  useEffect(() => {

    const getPodcastDetails = async () => {

      const storedPodcasts = JSON.parse(localStorage.getItem('podcastDetails_' + podcastId));
      const now = new Date().getTime();

      if (storedPodcasts && now - storedPodcasts.lastFetched < DAY_IN_MILISECONDS) {
        setPodcastDetails(JSON.parse(storedPodcasts.podcastDetails));
        setPodcastEpisodes(JSON.parse(storedPodcasts.podcastEpisodes));
      } else {
        try {
          setIsLoading(true);
          const url = `https://api.allorigins.win/get?url=${VITE_DETAILS_PODCAST_URL}${podcastId}%26media%3Dpodcast%26entity%3DpodcastEpisode%26limit%3D20`;


          const response = await fetch(url);
          const data = await response.json();

          const podcastData = JSON.parse(data.contents).results;

          const podcastDetailsData = podcastData.slice(0, 1).map(pod => ({
            id: pod.trackId,
            artistName: pod.artistName,
            title: pod.trackName,
            image: pod.artworkUrl600,
          }));

          const podcastEpisodesData = podcastData.slice(1).map(pod => ({
            id: pod.trackId,
            title: pod.trackName,
            date: pod.releaseDate,
            time: pod.trackTimeMillis,
            description: pod.description,
            url: pod.episodeUrl,
          }));
    
          setPodcastDetails(podcastDetailsData);
          setPodcastEpisodes(podcastEpisodesData);
          setIsLoading(false);

          localStorage.setItem(`podcastDetails_${podcastId}`, JSON.stringify({
            lastFetched: now,
            podcastDetails: JSON.stringify(podcastDetailsData),
            podcastEpisodes: JSON.stringify(podcastEpisodesData),
          }));

        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    } 

    getPodcastDetails();
  }, [setIsLoading, podcastId]);

  return { podcastDetails, podcastEpisodes };

}

export default ManagePodcastDetails;
