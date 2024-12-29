"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameList from '../components/GameList';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json'
        );

        console.log('API Response:', response.data); 

        setGames(response.data.slice(1)); 
        setFilteredGames(response.data.slice(1));

        // Extract unique platforms
        const uniquePlatforms = [
          ...new Set(
            response.data
              .map((game) => game.platform)
              .filter((platform) => platform) 
          ),
        ];
        setPlatforms(uniquePlatforms);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const handleSearch = (term) => {
    if (!term) {
      setFilteredGames(games); 
      return;
    }

    const searchResults = games.filter((game) =>
      game.title?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredGames(searchResults);
  };

  const handleSort = (platform) => {
    if (!platform) {
      setFilteredGames(games); 
      return;
    }

    const sortedGames = games.filter((game) => game.platform === platform);
    setFilteredGames(sortedGames);
  };

  return (
    <Container className="bg-primary">
      <div className="p-1">

      <h1 className="my-4 p-2  bg-light">Game Browser</h1>

      </div>
      <SearchBar onSearch={handleSearch} className="bg-secondary mt-3 mb-2" />
      <SortDropdown platforms={platforms} onSort={handleSort} />
      <GameList games={filteredGames} />
    </Container>
  );
};

export default HomePage;
