import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PodcastList from '../pages/PodcastList';
import PodcastDetail from '../pages/PodcastDetail';
import Header from '../components/Header/Header';
import EpisodePage from '../pages/EpisodePage';

function AppRouter () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PodcastList />} path="/" />
        <Route element={<PodcastDetail />} path="/podcast/:podcastId" />
        <Route element={<EpisodePage />} path="/podcast/:podcastId/episode/:episodeId" />
      </Routes>
    </Router>
  )
}

export default AppRouter; 