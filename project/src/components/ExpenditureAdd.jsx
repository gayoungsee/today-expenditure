import React from 'react';
import Categoryoptions from './Categoryoptions';

const ExpenditureAdd = ({
  onClickAdd,
  onChangeAdd,
  inputs,
  options,
  onChangCategory,
}) => {
  const { content, cost } = inputs;

  return (
    <div className="ex-addList-wrap">
      <h1 className="addList-title">지출등록</h1>
      <div className="ex-addList">
        <div className="addList-sec">
          <p className="addList-subtitle">카테고리 선택</p>
          <Categoryoptions
            options={options}
            onChangCategory={onChangCategory}
          />
        </div>
        <div className="addList-sec">
          <p className="addList-subtitle">내용</p>
          <input
            type="text"
            name="content"
            value={content}
            onChange={onChangeAdd}
          />
        </div>
        <div className="addList-sec">
          <p className="addList-subtitle">가격</p>
          <input
            type="number"
            name="cost"
            value={cost}
            onChange={onChangeAdd}
          />
        </div>
      </div>
      <div className="addList-btns">
        <button className="addList-btns-cancle">취소</button>
        <button className="addList-btns-add" onClick={onClickAdd}>
          등록
        </button>
      </div>
    </div>
  );
};

export default ExpenditureAdd;
