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
        podcastDetails && <PodcastDetails podcast={podcast} {...podcastDetails[0]} />
      }
      {
        podcastEpisodes && <EpisodesList podcastId={podcast.id} episodes={podcastEpisodes} />
      }
    </div>
  );
} 

export default PodcastDetail;