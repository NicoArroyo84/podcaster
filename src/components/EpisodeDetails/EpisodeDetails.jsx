import PropTypes from 'prop-types';
import utils from '../../utils/utils';

function EpisodeDetails ({episode}) {


  return (
    <section className='w-3/4 mx-auto'>
      <div className='w-11/12 mx-auto p-3 border border-gray-200 rounded-md shadow'>
        <h2 className='text-2xl font-semibold mb-4'>{episode.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: utils.formatDescription(episode.description),
          }}
        />

        <audio controls className='w-full mt-4'>
          <source src={episode.url} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>  
    </section>
  );
}   

EpisodeDetails.propTypes = {
  episode: PropTypes.object.isRequired
}

export default EpisodeDetails;