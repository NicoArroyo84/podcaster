import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FilterPodcasts({podcasts, setFilteredPodcasts}) {

  const [search, setSearch] = useState('');
  const [amountPodcasts, setAmountPodcasts] = useState(0);

  useEffect(() => {
    if (search) {
      const filteredData =  podcasts.filter((podcast) => `${podcast.name} ${podcast.author}`.toLowerCase().includes(search.toLowerCase()) || podcast.name.toLowerCase().includes(search.toLowerCase()));
      setFilteredPodcasts(filteredData);
      setAmountPodcasts(filteredData.length);
    } else {
      setFilteredPodcasts(podcasts)
      setAmountPodcasts(podcasts.length);
    }
  }, [search, podcasts, setFilteredPodcasts]);


  return (
    <div className='flex justify-end pe-4'>
      {<span className="bg-sky-500 text-white text-base font-semibold me-2 px-4 py-1 rounded-lg">{amountPodcasts}</span>}
      <input
        className="bg-white w-1/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 p-1.5 px-3"
        placeholder='Filter podcasts ...' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        type='text' 
      />
    </div>
  ); 
} 

FilterPodcasts.propTypes = {
  podcasts: PropTypes.array.isRequired,
  setFilteredPodcasts: PropTypes.func.isRequired
};

export default FilterPodcasts;