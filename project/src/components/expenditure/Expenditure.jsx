// import React from 'react';

import React, { useState } from 'react';
import TodayHeader from './TodayHeader';
import ExpenditureList from './ExpenditureList';
import ExpenditureAdd from './ExpenditureAdd';

const Expenditure = () => {
  const [visible, setVisible] = useState(false);
  console.log(visible);

  const clickBtnAdd = () => {
    console.log('hello');
    setVisible(!visible);
  };

  return (
    <div className="expenditure">
      <div className="ex-wrap">
        <TodayHeader clickBtnAdd={clickBtnAdd} />
        <div className="ex-body-wrap">
          <div className="ex-body">
            <ExpenditureList />
            {visible && <ExpenditureAdd />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
