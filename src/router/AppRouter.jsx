import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PodcastList from '../pages/PodcastList';
import PodcastDetail from '../pages/PodcastDetail';
import EpisodeDetails from '../pages/EpisodeDetails';
import Header from '../components/Header/Header';

function AppRouter () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PodcastList />} path="/" />
        <Route element={<PodcastDetail />} path="/podcast/:podcastId" />
        <Route element={<EpisodeDetails />} path="/podcast/:podcastId/episode/:episodeId" />
      </Routes>
    </Router>
  )
}

export default AppRouter; 