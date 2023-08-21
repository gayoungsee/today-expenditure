import React from 'react';

const ExpenditureList = ({ list }) => {
  return (
    <div className="ex-list">
      <ul className="ex-list-wrap">
        {list.map((li, idx) => (
          <li key={idx}>
            <div className="ex-category ex-category-01">
              <p>{li.category}</p>
            </div>
            <p className="ex-history">{li.content}</p>
            <strong className="ex-cost">-{li.cost}</strong>
            <button className="ex-btn-edit"></button>
            <button className="ex-btn-delete"></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenditureList;
