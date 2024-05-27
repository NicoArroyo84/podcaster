import { Link } from 'react-router-dom';
import utils from '../../utils/utils';

function EpisodesList ({ podcastId, episodes }) {
  return (
    <section className='w-4/5'>  
      <div className='w-11/12 mx-auto mb-7'>
        <h2 className='border border-gray-200 mx-auto p-3 rounded-md shadow text-2xl font-semibold'>
						Episodes: {episodes.length}
        </h2>
      </div>
      <div className='w-11/12 mx-auto py-7 px-3 border border-gray-200 rounded-md shadow mb-7'>
					<div className='relative overflow-x-auto'>
						<table className='w-full text-sm text-left text-gray-500'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 w-9/12'>
										Title
									</th>
									<th
										scope='col'
										className='px-6 py-3 w-2/12'>
										Date
									</th>
									<th
										scope='col'
										className='px-6 py-3 w-1/12'>
										Duration
									</th>
								</tr>
							</thead>
							<tbody>
              <>
			{episodes.map(episode => (
				<tr
					key={episode.id}
					className='odd:bg-gray-100 even:bg-white border-b'>
					<th
						scope='row'
						className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
						<Link
							to={`/podcast/${podcastId}/episode/${episode.id}`}
							className='text-blue-600 hover:underline'>
							{episode.title}
						</Link>
					</th>
					<td className='px-6 py-4'>{utils.formatDate(episode.date)}</td>
					<td className='px-6 py-4'>
						{episode.time ? `${utils.formatTime(episode.time)}` : ''}
					</td>
				</tr>
			))}
		</>
							</tbody>
						</table>
					</div>
				</div>
    </section>

  );
} 

export default EpisodesList;