import { useLocation } from 'react-router-dom';
import EpisodeDetails from '../components/EpisodeDetails/EpisodeDetails';
import ManagePodcastDetails from '../hooks/ManagePodcastDetails';
import PodcastDetails from '../components/PodcastDetails/PodcastDetails'; 

function EpisodePage() {

  const { podcastDetails } = ManagePodcastDetails();
  let { podcast, episode } = useLocation().state;

  return (
    <div className="flex">
      {
        podcastDetails && <PodcastDetails podcast={podcast} {...podcastDetails[0]} />
      }

      <EpisodeDetails episode={episode} />
    </div>
  );
}

export default EpisodePage;