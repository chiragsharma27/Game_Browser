import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SortDropdown = ({ platforms, onSort }) => {
  return (
    <Dropdown className="mb-3">
      <Dropdown.Toggle variant="primary" id="dropdown-basic" className="bg-success">
        Sort by Platform
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSort('')}>All</Dropdown.Item>
        {platforms.map((platform, index) => (
          <Dropdown.Item key={index} onClick={() => onSort(platform)}>
            {platform}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropdown;
