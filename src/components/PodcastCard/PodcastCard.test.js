import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import PodcastCard from './PodcastCard';
import * as router from 'react-router';


describe("test PodcastCard component", () => {
  let podcast; 

  beforeEach(() => {
    podcast = {
      id: '1p2p3',
      name: 'Podcast 1',
      author: 'Author 1',
      img: 'https://via.placeholder.com/150'
    };
  })

  test('should render author name', () => {
    render(
      <MemoryRouter>
        <PodcastCard podcast={podcast} />
      </MemoryRouter>
    );
    const podcastCardText = screen.getByText(podcast.author);
    expect(podcastCardText).toBeInTheDocument();
  })

  test('should render image', () => {
    render(
      <MemoryRouter>
        <PodcastCard podcast={podcast} />
      </MemoryRouter>
    );
 
    const podcastImg =  screen.getByAltText(podcast.name);
    expect(podcastImg).toHaveAttribute('src', podcast.img); 
  })

  test('should render podcast name', () => {
    render(
      <MemoryRouter>
        <PodcastCard podcast={podcast} />
      </MemoryRouter>
    );
    const podcastCardText = screen.getByText(podcast.name);
    expect(podcastCardText).toBeInTheDocument();
  })

  test('should have a link to the podcast', () => {
    const component = render(
      <MemoryRouter>
        <PodcastCard podcast={podcast} />
      </MemoryRouter>
    );

    const link = component.getByRole('link');
    expect(link).toHaveAttribute('href', `/podcast/${podcast.id}`);
  })

  test('should navigate to the podcast', () => {
    const mockedNavigation = jest.fn();  
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigation)

    render(
      <MemoryRouter>
        <PodcastCard podcast={podcast} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    fireEvent.click(link);
    expect(mockedNavigation).toHaveBeenCalledWith(
      `/podcast/${podcast.id}`,
      { 
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: {podcast: podcast},
        unstable_viewTransition: undefined
      }
    );
  })
})