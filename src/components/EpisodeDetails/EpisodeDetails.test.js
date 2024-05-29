import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import EpisodeDetails from "./EpisodeDetails";

describe("testEpisodeDetails component", () => {
  let episode;

  beforeEach(() => {
    episode = {
      id: '1',
      title: 'Episode 1',
      description: 'Description 1',
      url: 'https://via.placeholder.com/150'
    };
  })

  test('should render episode title', () => {
    render(
      <MemoryRouter>
        <EpisodeDetails episode={episode} />
      </MemoryRouter>
    );
    const episodeTitle = screen.getByText(episode.title);
    expect(episodeTitle).toBeInTheDocument();
  })

  test('should render description', () => {
    render(
      <MemoryRouter>
        <EpisodeDetails episode={episode} />
      </MemoryRouter>
    );
 
    const episodeDescription =  screen.getByText(episode.description);
    expect(episodeDescription).toBeInTheDocument();
  })

  test('should render audio source', () => {
    const componet = render(
      <MemoryRouter>
        <EpisodeDetails episode={episode} />
      </MemoryRouter> 
    );
 
    const episodeAudioSource = componet.container.querySelector('source');
    expect(episodeAudioSource).toHaveAttribute('src', episode.url); 
  })
})