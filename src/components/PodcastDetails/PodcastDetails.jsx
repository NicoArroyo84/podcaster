import PropTypes from 'prop-types';

function PodcastDetails( { podcast } ) {

	return (
    <aside className='w-1/5'>
      <div className='w-9/12 border border-gray-200 mx-auto py-5 px-3 rounded-md shadow'>
					<img
						className='mx-auto rounded-md'
						src={podcast.img}
						alt=''
					/>
					<hr className='my-5' />
					<h2 className='text-md font-semibold'>{podcast.name}</h2>
					<p className='text-md italic'>by: {podcast.author}</p>
					<hr className='my-5' />
					{
						podcast.description && (
							<>
								<h3 className='text-sm font-semibold'>Description:</h3>
								<p className='text-sm italic break-words'>{podcast.description}</p>
							</>
						)
					}
				</div>
    
    </aside>
  )
}    

PodcastDetails.propTypes = {
	podcast: PropTypes.object.isRequired,
}

export default PodcastDetails;