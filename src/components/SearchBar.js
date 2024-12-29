import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <Form className="my-3">
      <FormControl
        type="text"
        placeholder="Search games..."
        onChange={handleInputChange}
      />
    </Form>
  );
};

export default SearchBar;
