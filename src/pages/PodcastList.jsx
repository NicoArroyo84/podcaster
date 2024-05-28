import { useState } from 'react';
import ManagePodcasts from '../hooks/ManagePodcasts';
import PodcastCard from '../components/PodcastCard/PodcastCard';
import FilterPodcasts from '../components/FilterPodcasts/FilterPodcasts';

function PodcastList() {

  const {podcasts} = ManagePodcasts();
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  return (
    <div className='flex flex-col'>
      <FilterPodcasts podcasts={podcasts} setFilteredPodcasts={setFilteredPodcasts} />      
      <section className='mt-7 px-4 w-full pt-10'>
        <div className='grid grid-cols-4 gap-10' >
        {
          filteredPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))
        }
        </div>

        {
          filteredPodcasts.length === 0 && <p className='text-center text-3xl font-semibold'>No podcast found</p>
        }
        </section>
    </div>
  );
} 

export default PodcastList;