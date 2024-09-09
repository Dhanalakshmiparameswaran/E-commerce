// import React, { useState } from 'react';
// import './App.css'

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(searchQuery);
//   };

//   return (
//     <div className="search-bar">
//       <input className="in"
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <button className='sbtn' onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;


// SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <input className="in"
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search for products..." 
      />
      <button className='sbtn' type="submit">Search</button>
    </form>
    </div>
  );
};

export default SearchBar;
