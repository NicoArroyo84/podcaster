import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PodcastList from '../components/PodcastList';
import EpisodesList from '../components/EpisodiesList';
import EpisodeDetails from '../components/EpisodeDetails';
import Header from '../components/Header/Header';

function AppRouter () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PodcastList />} path="/" />
        <Route element={<EpisodesList />} path="/podcast/:podcastid" />
        <Route element={<EpisodeDetails />} path="/podcast/:podcastid/episode/:episodeid" />
      </Routes>
    </Router>
  )
}

export default AppRouter; 