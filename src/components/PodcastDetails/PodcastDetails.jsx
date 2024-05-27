import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PodcastDetails( { podcast, id, artistName, title, image } ) {

	return (
    <aside className='w-1/5'>
      <div className='w-9/12 border border-gray-200 mx-auto py-5 px-3 rounded-md shadow'>
					<img
						className='mx-auto rounded-md'
						src={image}
						alt=''
					/>
					<hr className='my-5' />
					<h2 className='text-md font-semibold'>{title}</h2>
					<p className='text-md italic'>by: {artistName}</p>
					<hr className='my-5' />
					{
						podcast.description && (
							<>
								<h3 className='text-sm font-semibold'>Description:</h3>
								<p className='text-sm italic'>{podcast.description}</p>
							</>
						)
					}
				</div>
    
    </aside>
  )
}    

PodcastDetails.propTypes = {
	podcast: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	artistName: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default PodcastDetails;