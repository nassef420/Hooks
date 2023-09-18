import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies,] = useState([
    {
      title: 'The Platform',
      description: 'The film is set in a large, tower-style Its residents, who are switched every month between its many floors,',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJHg57lYxrDQj8mqKk52Ky0XjL8FlkwlV6uBeOaXvUEBEwISqD',
      rating: 8,
    },
    {
      title: 'Shutter Island',
      description: 'Two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
      posterURL: 'https://fr.web.img4.acsta.net/medias/nmedia/18/69/96/84/19151192.jpg',
      rating: 7,
    },
    {
      title: 'The Revenant',
      description: 'Set in 1820s America, fur trapper and Frontiersman Hugh Glass struggles to survive the harsh winter after an oppressive Ree Indian attack and a mauling from a hostile maternal bear. Abandoned by his crew, Glass attempts to cross the bleak wasteland with only a single notion set in his mind; Revenge.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRm0dU5tV8YfQ4kU89ukF20EPt7PO-n6R62UW9k8rPxkn-Fk8KZ',
      rating: 9,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
    );
  });

  const handleTitleChange = (value) => {
    setFilterTitle(value);
  };

  const handleRateChange = (value) => {
    setFilterRating(value);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        title={filterTitle}
        rate={filterRating}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;