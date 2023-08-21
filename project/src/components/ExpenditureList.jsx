import React from 'react';

const ExpenditureList = () => {
  return (
    <div className="ex-list">
      <ul className="ex-list-wrap">
        <li>
          {/* <div className="ex-category ex-category-01"> */}
          <div className="ex-category ex-category-01">
            <p>식사</p>
          </div>
          <p className="ex-history">우주중화반점</p>
          <strong className="ex-cost">-7000원</strong>
          <button className="ex-btn-edit"></button>
          <button className="ex-btn-delete"></button>
        </li>
        <li>
          <div className="ex-category ex-category-02">문화생활</div>
          <p className="ex-history">영화</p>
          <strong className="ex-cost">-30000원</strong>
          <button className="ex-btn-edit"></button>
          <button className="ex-btn-delete"></button>
        </li>
        <li>
          <div className="ex-category ex-category-02">문화생활</div>
          <p className="ex-history">영화</p>
          <strong className="ex-cost">-30000원</strong>
          <button className="ex-btn-edit"></button>
          <button className="ex-btn-delete"></button>
        </li>
      </ul>
    </div>
  );
};

export default ExpenditureList;
