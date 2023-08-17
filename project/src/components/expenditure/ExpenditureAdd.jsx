import React, { useState } from 'react';

const ExpenditureAdd = onClickAdd => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { content, cost } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="ex-addList-wrap">
      <h1 className="addList-title">지출등록</h1>
      <div className="ex-addList">
        <div className="addList-sec">
          <p className="addList-subtitle">카테고리 선택</p>
          <select name="" id="">
            <option value="식사">식사</option>
            <option value="문화생활">문화생활</option>
            <option value="의료비">의료비</option>
          </select>
        </div>
        <div className="addList-sec">
          <p className="addList-subtitle">내용</p>
          <input
            type="text"
            name="content"
            value={content}
            onChange={onChange}
          />
        </div>
        <div className="addList-sec">
          <p className="addList-subtitle">가격</p>
          <input type="number" name="cost" value={cost} onChange={onChange} />
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
