import PodcastDetails from '../components/PodcastDetails/PodcastDetails';
import ManagePodcastDetails from '../hooks/ManagePodcastDetails';
import EpisodesList from '../components/EpisodesList/EpisodesList';
import { useLocation } from 'react-router-dom';

function PodcastDetail() {

  const { podcastDetails, podcastEpisodes } = ManagePodcastDetails();

  let { podcast } = useLocation().state;
  
  return (
 
    <div className="flex">
      {
        podcast && <PodcastDetails podcast={podcast} />
      }
      {
        podcastEpisodes && <EpisodesList podcast={podcast} episodes={podcastEpisodes} />
      }
    </div>
  );
} 

export default PodcastDetail;