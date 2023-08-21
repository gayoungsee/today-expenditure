// import React from 'react';

import React, { useState } from 'react';
import TodayHeader from './TodayHeader';
import ExpenditureList from './ExpenditureList';
import ExpenditureAdd from './ExpenditureAdd';

const Expenditure = () => {
  const [visible, setVisible] = useState(false);

  console.log(visible);

  const clickBtnPlus = () => {
    console.log('hello');
    setVisible(!visible);
  };
  const onClickAdd = e => {
    console.log(e.target.value);
  };

  return (
    <div className="expenditure">
      <div className="ex-wrap">
        <TodayHeader clickBtnPlus={clickBtnPlus} />
        <div className="ex-body-wrap">
          <div className="ex-body">
            <ExpenditureList />
            {visible && <ExpenditureAdd onClickAdd={onClickAdd} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
