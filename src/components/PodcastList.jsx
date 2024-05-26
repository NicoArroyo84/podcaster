import React , { useEffect, useState } from 'react';
import ManagePodcasts from '../hooks/ManagePodcasts';
import PodcastCard from './PodcastCard/PodcastCard';

function PodcastList() {

  const {podcasts} = ManagePodcasts();
  const [search, setSearch] = useState(''); 
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredData =  podcasts.filter((podcast) => `${podcast.name} ${podcast.author}`.toLowerCase().includes(search.toLowerCase()) || podcast.name.toLowerCase().includes(search.toLowerCase()));
      setFilteredPodcasts(filteredData);
    } else {
      setFilteredPodcasts(podcasts)
    }
  }, [search, podcasts]);

  
  return (
    <div className='flex flex-col'>
      <div className='flex justify-end pe-4'>
        <span className="bg-blue-700 text-white text-base font-semibold me-2 px-4 py-1 rounded-full">{filteredPodcasts.length}</span>
        <input
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 p-1.5 px-3"
          placeholder='Filter podcasts ...' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          type='text' 
        />
      </div>
        <section className='mt-7 px-4 w-full pt-10'>
          <div className='grid grid-cols-4 gap-4' >
          {
            filteredPodcasts.map((podcast) => (
              <React.Fragment key={podcast.id}> 
                <PodcastCard podcast={podcast}></PodcastCard>
              </React.Fragment>
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