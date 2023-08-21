// import React from 'react';

import React, { useState } from 'react';
import TodayHeader from './TodayHeader';
import ExpenditureList from './ExpenditureList';
import ExpenditureAdd from './ExpenditureAdd';

const Expenditure = () => {
  const [visible, setVisible] = useState(false);
  const [inputs, setInputs] = useState({
    category: '전체',
    content: '',
    cost: '',
  });
  console.log(inputs);
  const [list, setList] = useState([
    {
      category: '식사',
      content: '홍콩짬뽕',
      cost: 0,
    },
    {
      category: '문화생활',
      content: '영화',
      cost: 30000,
    },
  ]);
  const options = [
    { value: '전체' },
    { value: '식사' },
    { value: '문화생활' },
    { value: '의료비' },
  ];
  const { category, content, cost } = inputs;

  const clickBtnPlus = () => {
    console.log('hello');
    setVisible(!visible);
  };
  const onChangeAdd = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onChangCategory = e => {
    setInputs({
      ...inputs,
      category: e.target.value,
    });
  };
  const clickResetAdd = () => {
    setInputs({
      category: '전체',
      content: '',
      cost: '',
    });
  };
  const onClickAdd = e => {
    setList([...list, { category, content, cost }]);
    clickResetAdd();
  };

  return (
    <div className="expenditure">
      <div className="ex-wrap">
        <TodayHeader clickBtnPlus={clickBtnPlus} />
        <div className="ex-body-wrap">
          <div className="ex-body">
            <ExpenditureList list={list} />
            {visible && (
              <ExpenditureAdd
                onClickAdd={onClickAdd}
                onChangeAdd={onChangeAdd}
                inputs={inputs}
                options={options}
                onChangCategory={onChangCategory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
