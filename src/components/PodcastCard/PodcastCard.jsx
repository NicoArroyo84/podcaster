import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PodcastCard({podcast}) {
  
  return (
    <Link className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 duration-300" to={`/podcast/${podcast.id}`}>
      <div className="flex flex-col items-center pb-6">
        <img className="w-24 h-24 mb-3 -mt-10 rounded-full shadow-lg" src={podcast.img} alt={podcast.name} />
        <h5 className="mb-1 text-md font-semibold text-gray-900 uppercase text-center">{podcast.name}</h5>
        <p className="text-sm text-gray-500 text-center">{podcast.author}</p>
      </div>
    </Link> 
  );
} 

PodcastCard.propTypes = {
  podcast: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string,
  }).isRequired
} 

export default PodcastCard;

