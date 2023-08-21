import React from 'react';

const Categoryoptions = ({ options, onChangCategory }) => {
  return (
    <>
      <select onChange={onChangCategory}>
        {options.map((option, key) => (
          <option value={option.name} defaultValue="전체" key={key}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Categoryoptions;
