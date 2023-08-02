import React from 'react';
import TodayHeader from './TodayHeader';

const Expenditure = () => {
  return (
    <div className="expenditure">
      <div className="ex-wrap">
        <TodayHeader />
        <div className="ex-body-wrap">
          <div className="ex-body"></div>
          <button className="ex-btn-add">+</button>
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
