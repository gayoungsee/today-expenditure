import React from 'react';
import TodayHeader from './TodayHeader';
import ExpenditureList from './ExpenditureList';
import ExpenditureAdd from './ExpenditureAdd';

const Expenditure = () => {
  return (
    <div className="expenditure">
      <div className="ex-wrap">
        <TodayHeader clickBtnAdd={clickBtnAdd} />
        <div className="ex-body-wrap">
          <div className="ex-body">
            <ExpenditureList />
            <ExpenditureAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

const clickBtnAdd = () => {
  console.log('btn');
};

export default Expenditure;
