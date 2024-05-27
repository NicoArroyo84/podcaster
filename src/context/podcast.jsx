import { useState, createContext } from "react";

export const PodcastContext = createContext();

export function PodcastProvider({ children }) {

  const [podcast, setPodcast] = useState(null);

  return (
    <PodcastContext.Provider value={{podcast, setPodcast}}>
      {children}
    </PodcastContext.Provider>
  )
}